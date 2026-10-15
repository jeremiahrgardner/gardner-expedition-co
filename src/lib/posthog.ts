import posthog from 'posthog-js';

// One PostHog project covers the whole ecosystem. Every event carries `site`
// so dashboards can filter per domain or follow a visitor across domains.
const SITE = 'gardnerexpedition.co';
const ECOSYSTEM_HOSTS = ['jeremiahgardner.com', 'deadreckon.io', 'haloclinepress.com', 'gardnerexpedition.co'];
// Links between ecosystem sites carry the visitor's PostHog IDs so a journey
// that crosses domains stays one person and one session. Removed on arrival.
const ID_PARAM = 'ph_did';
const SESSION_PARAM = 'ph_sid';

const bareHost = (host: string) => host.replace(/^www\./, '');
const isEcosystemHost = (host: string) => ECOSYSTEM_HOSTS.includes(bareHost(host));

function takeIdsFromUrl() {
  const url = new URL(window.location.href);
  const distinctID = url.searchParams.get(ID_PARAM);
  const sessionID = url.searchParams.get(SESSION_PARAM);
  if (!distinctID && !sessionID) return undefined;
  url.searchParams.delete(ID_PARAM);
  url.searchParams.delete(SESSION_PARAM);
  window.history.replaceState(window.history.state, '', url);
  return distinctID ? { distinctID, sessionID } : undefined;
}

function decorateCrossSiteLink(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link) return;
  let url: URL;
  try {
    url = new URL(link.href);
  } catch {
    return;
  }
  if (!isEcosystemHost(url.hostname) || bareHost(url.hostname) === bareHost(window.location.hostname)) return;
  url.searchParams.set(ID_PARAM, posthog.get_distinct_id());
  const sessionID = posthog.get_session_id();
  if (sessionID) url.searchParams.set(SESSION_PARAM, sessionID);
  link.href = url.toString();
}

let started = false;

/** Starts PostHog once. Does nothing until NEXT_PUBLIC_POSTHOG_KEY is set. */
export function initPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (started || !key || typeof window === 'undefined') return;
  started = true;
  posthog.init(key, {
    api_host: '/ingest', // proxied to PostHog US cloud in next.config
    ui_host: 'https://us.posthog.com',
    defaults: '2026-08-30',
    person_profiles: 'identified_only',
    bootstrap: takeIdsFromUrl(),
  });
  posthog.register({ site: SITE });
  document.addEventListener('click', decorateCrossSiteLink, true);
  document.addEventListener('auxclick', decorateCrossSiteLink, true);
}

/** Captures an event once PostHog is running; a no-op before init or without a key. */
export function track(event: string, properties: Record<string, string> = {}) {
  if (!posthog.__loaded) return;
  posthog.capture(event, { path: window.location.pathname, ...properties });
}

export { posthog };
