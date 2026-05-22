import { articles } from "@/lib/articles"
import SiteNav from "@/components/SiteNav"
import SiteFooter from "@/components/SiteFooter"
import Link from "next/link"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

// ─── GEC static essay content (not in articles.json) ─────────────────────────
const gecEssays: Record<string, {
  title: string
  date: string
  tag: string
  excerpt: string
  content: string[]
}> = {
  "navigating-uncertainty": {
    title: "On Navigating Uncertainty Without a Map",
    date: "March 2026",
    tag: "Systems Thinking",
    excerpt: "The goal in genuine uncertainty is not to eliminate the unknown. It never was. The goal is to develop a better relationship with it.",
    content: [
      "Most of us were taught the same thing. Uncertainty is a problem. A gap. Close it with more information, more analysis, more preparation. Get the right data. Build a better plan. Execute against it.",
      "That works fine in stable environments with simple problems. In complex, adaptive environments \u2014 the ones most of us are actually operating inside \u2014 it is actively dangerous.",
      "Think about that for a second. The thing we were taught to do is the thing that gets us into trouble.",
      "The goal in genuine uncertainty is not to eliminate the unknown. It never was. The goal is to develop a better relationship with it. One that lets you act with conviction while remaining capable of being wrong. The maps we rely on in familiar territory fail us precisely at the edges of the known. So the question is not how to build a better map. The question is how to become a better navigator.",
      "Those are not the same question. Not even close.",
      "##HR##",
      "##H2##The Navigator's Paradox",
      "Here is what experienced navigators know that novices don\u2019t.",
      "The most dangerous moments don\u2019t come when you are completely lost. They come when you *think* you know where you are \u2014 and you don\u2019t. Partial certainty is more dangerous than complete uncertainty. It produces false confidence. It shuts down the very attention you\u2019d need to catch the mistake before it compounds.",
      "What do you do when you are certain? You stop checking. You stop reading the environment. You stop asking whether the map still matches the terrain. The moment you believe you have arrived \u2014 position known, course set, map accurate \u2014 you close the perceptual channels that would otherwise catch what\u2019s going wrong.",
      "That is the navigator\u2019s paradox. Certainty is the thing that blinds you.",
      "The map is not the territory. We know this. We say this. And then we defend the map anyway \u2014 in boardrooms, in strategy sessions, in investor decks \u2014 as though the territory owes us conformity.",
      "> A map that has outlived its usefulness is not a neutral object. It is an active obstacle. It is worse than no map at all.",
      "##HR##",
      "##H2##What Good Navigation Looks Like",
      "The best navigators I have watched share something specific. It is not confidence, exactly. It is not intelligence. It is not experience, though they have that too.",
      "It is what I would call **productive uncertainty**.",
      "An ongoing awareness that their current understanding might be wrong \u2014 paired with the discipline to act as if it were right. Not paralysis. Not false confidence. Not the performance of certainty for the benefit of everyone watching.",
      "A disciplined hypothesis. Held lightly. Executed firmly.",
      "Can you feel the difference? The leader who needs to be right versus the leader who needs to be accurate. The executive who defends the plan versus the one who reads the terrain. The founder who doubles down on the roadmap versus the one who follows the actual signal.",
      "What worked for Blockbuster\u2019s map isn\u2019t working for Netflix\u2019s terrain. What worked for Nokia\u2019s certainty isn\u2019t working for the market\u2019s reality. The organizations that collapse under uncertainty are rarely the ones that lacked intelligence. They are the ones that could not tolerate the discomfort of acting on something they were not fully sure of.",
      "**The comfortable story:** we just need more clarity before we move.",
      "**The reality:** most teams don\u2019t lack clarity. They lack the willingness to act on what they already know.",
      "Let\u2019s be honest. Tolerating ambiguity without becoming indecisive is hard. Maintaining direction without becoming rigid is hard. Updating your model without losing your course is hard. Doing all three simultaneously, under pressure, with people watching \u2014 that is the actual work. Most of the strategic planning that fills our conference rooms produces impressive documents and irrelevant outcomes because it never comes close to that.",
      "##HR##",
      "##H2##The Intelligence of Systems",
      "Here is the part most leaders don\u2019t want to sit with.",
      "Every system \u2014 organizational, biological, economic, political \u2014 contains more intelligence than any individual actor within it. Every one. Without exception. The failure mode of leadership is almost always the same story: the leader begins to believe their intelligence exceeds the intelligence of the system they are operating inside.",
      "It does not.",
      "You are one mind. The system is thousands of minds, millions of feedback loops, signals you cannot see from where you are standing. This is not an argument for passivity. It is an argument for epistemology. Know what *you* know. Know what the *system* knows. Know the difference.",
      "The navigator\u2019s task is to read the system\u2019s signals accurately. To align actions with the system\u2019s logic. To notice \u2014 early, not late \u2014 when the system is moving in a direction that will make the current plan obsolete.",
      "So why do so many organizations get this wrong?",
      "Because reading the system requires unfiltered access to what is actually happening. And most organizations filter ruthlessly on the way up. The signal gets softened. Contextualized. Optimized for the comfort of whoever receives it. By the time it reaches the people who need it, it is no longer the signal. It is the story we told ourselves about the signal.",
      "The organizations that navigate uncertainty best are not the ones with the best predictions. They are the ones with the best feedback systems. Genuine access. Real information. The cultural discipline to update when the data contradicts the plan.",
      "That is rarer than it should be.",
      "##HR##",
      "##H2##Practice, Not State",
      "Here is the frame I keep returning to.",
      "Navigation is not a state you achieve. It is a practice you maintain.",
      "There is no arrival point. No finish line at which you have successfully navigated the territory and can now relax. The territory is always changing. The map is always drifting out of accuracy. The discipline of navigation is perpetual.",
      "Does that discourage you or liberate you?",
      "If you need to have figured it out \u2014 if certainty is the destination \u2014 then uncertainty is a permanent threat. You will spend your career trying to eliminate something that cannot be eliminated. And it will exhaust you.",
      "But if you are comfortable with the practice of figuring it out \u2014 if the process of reading the terrain, adjusting the course, updating the model is itself the work \u2014 then uncertainty stops being the enemy.",
      "It becomes the condition that makes the work worth doing at all.",
      "You can feel it when someone has made that shift. They move differently. They ask different questions. They are not performing confidence \u2014 they are practicing navigation. Calm. Attentive. Willing to be wrong. Committed to moving anyway.",
      "That is the line worth tracing. Not the line between certainty and uncertainty. The line between those who need the map to be right, and those who have learned to read the terrain.",
    ],
  },
  "the-intelligence-of-systems": {
    title: "The Intelligence of Systems",
    date: "February 2026",
    tag: "Organizational Dynamics",
    excerpt: "Every organization is a living system with its own gravity, resistance, and momentum. The leader\u2019s task is not to control it \u2014 but to read it.",
    content: [
      "Every organization is a living system with its own gravity, resistance, and momentum. The leader\u2019s task is not to control it \u2014 but to read it.",
      "Systems thinking is not a methodology. It is a discipline of attention \u2014 a way of seeing the patterns that connect things rather than the things themselves. The leader who can see the system as a whole has an advantage that no amount of silo expertise can replicate.",
      "##H2##What Systems Are Trying to Do",
      "Every system \u2014 biological, ecological, social, organizational \u2014 has a tendency toward certain configurations. Not destinations. Tendencies. The system moves toward equilibrium, toward self-preservation, toward the path of least resistance. It does this whether or not any individual actor within it intends it.",
      "When a leader understands what the system is trying to do, they can work with that tendency rather than against it. When they don\u2019t, they find themselves fighting the system \u2014 and the system usually wins, because the system has more information, more time, and more patience than any individual.",
      "> The system is not the problem. The leader\u2019s failure to read the system is the problem.",
      "##H2##Reading the Signal Through the Noise",
      "Every system generates signals. Some of them are noise \u2014 random fluctuations that mean nothing. Some of them are signals \u2014 genuine information about what the system is doing and where it is going. The leader\u2019s job is to tell the difference.",
      "The organizations that navigate change best are the ones that have developed genuine sensitivity to weak signals \u2014 the early indicators that something is shifting before the shift becomes obvious. They build feedback loops that capture what is actually happening, not what they expect to happen.",
      "##H2##The Leader as System Reader",
      "The best leaders I have observed share a specific quality: they are more interested in what the system is telling them than in what they already know. They have the intellectual humility to recognize that the system has more information than they do, and the discipline to act on that information rather than on their existing models.",
      "This does not mean the leader is passive. It means the leader is responsive \u2014 that they are adjusting their actions based on what the system is revealing, rather than executing a predetermined plan regardless of what the system says.",
    ],
  },
  "alignment-as-practice": {
    title: "Alignment as Practice",
    date: "January 2026",
    tag: "Leadership",
    excerpt: "Alignment is not a state you reach. It is a discipline you practice \u2014 daily, in the face of evidence that suggests you are off course.",
    content: [
      "Alignment is not a state you reach. It is a discipline you practice \u2014 daily, in the face of evidence that suggests you are off course.",
      "Most leaders think about alignment as a project: get everyone in the room, align on the strategy, commit to the plan. Done. The problem is that alignment, like trust, is not a one-time event. It is a continuous process. And the moment you stop practicing it, you start drifting.",
      "##H2##The Drift Problem",
      "Organizations are not static. The people change, the context changes, the understanding changes. What was aligned six months ago may be misaligned today \u2014 not because anyone did anything wrong, but because the system evolved and the alignment did not.",
      "The leaders who maintain alignment over time are the ones who have made it a practice \u2014 a regular, ongoing discipline of checking in, recalibrating, and updating the shared understanding. Not a quarterly offsite. A daily discipline.",
      "> Alignment is not an achievement. It is a practice. And like all practices, it requires daily attention.",
      "##H2##What Alignment Practice Looks Like",
      "In practice, alignment means something specific: it means that the people who need to be aligned are regularly exposing their assumptions to each other, checking whether those assumptions still hold, and updating their shared model when the evidence suggests they should.",
      "This requires a specific kind of environment \u2014 one where it is safe to say \u201CI think we may be off course\u201D without being seen as disloyal or difficult. The leader\u2019s job is to create and protect that environment.",
      "##H2##The Center That Holds",
      "Alignment is easier when there is a genuine center \u2014 a shared understanding of what matters most, what the goal is, what the constraints are. Without that center, alignment is exhausting and fragile. With it, alignment is sustainable even in conditions of genuine uncertainty.",
      "This is one of the reasons the Goldline framework exists: to give leaders and teams a way to find and maintain that center over time, even as the environment changes around them.",
    ],
  },
  "why-organizations-stop-learning": {
    title: "Why Organizations Stop Learning",
    date: "December 2025",
    tag: "Organizational Learning",
    excerpt: "The organizations that navigate change best are not the ones with the best predictions. They are the ones with the best feedback systems \u2014 genuine access to useful surprise.",
    content: [
      "The organizations that navigate change best are not the ones with the best predictions. They are the ones with the best feedback systems \u2014 genuine, unfiltered access to information about what is actually happening, with the organizational discipline to update accordingly.",
      "Most organizations have more information than they use. They collect data, run surveys, hold reviews. But they don\u2019t actually learn \u2014 because the information doesn\u2019t get to the people who need it, or it does but they don\u2019t update, or they update but the update doesn\u2019t change behavior.",
      "##H2##The Three Failure Modes",
      "Organizations stop learning in predictable ways.",
      "First, they filter information to protect the model rather than to protect against error. When information contradicts what leadership believes, the tendency is to explain it away rather than to update.",
      "Second, they create feedback loops that are too slow and too coarse. By the time the signal gets to the decision-maker, the window for effective action has closed.",
      "Third, they punish surprise. The organization that punishes the messenger of bad news eventually stops receiving bad news. Not because the bad news stops, but because the people who would deliver it learn to stay silent.",
      "> The organizations that learn best are the ones that have made it safe to be surprised.",
      "##H2##Rebuilding the Learning System",
      "Learning is not a process improvement project. It is an organizational discipline \u2014 a set of practices, norms, and structures that make it possible for the organization to update its mental models based on evidence.",
      "The starting point is creating genuine access to useful surprise: making it possible for the people closest to the work to say what they actually see, without filtering for what leadership wants to hear.",
    ],
  },
  "the-difference-between-strategy-and-planning": {
    title: "The Difference Between Strategy and Planning",
    date: "November 2025",
    tag: "Strategy",
    excerpt: "Strategy is the allocation of resources toward a theory of the future. Planning is the attempt to specify that future in detail. The first creates options; the second consumes them.",
    content: [
      "Strategy is the allocation of resources toward a theory of the future. Planning is the attempt to specify that future in detail. The first creates options; the second consumes them.",
      "This distinction matters because organizations consistently confuse the two. They produce strategy documents that are really plans \u2014 detailed forecasts of activities, timelines, and deliverables \u2014 and then are surprised when the plan becomes obsolete the moment the environment shifts.",
      "##H2##What Strategy Actually Does",
      "Strategy is a theory. It says: we believe that if we allocate resources in this direction, rather than that direction, we will create better outcomes over time. It is a bet, made with incomplete information, about the relationship between actions and consequences.",
      "The value of a strategy is not its accuracy \u2014 it is its clarity. A clear strategy, even a wrong one, allows an organization to learn. Because if the strategy is wrong, the evidence will eventually show it, and the organization can update. But if the strategy is vague \u2014 if it is really a plan dressed up as a strategy \u2014 there is no clear signal to update from.",
      "> A clear strategy, even a wrong one, is more useful than a detailed plan that has outlived its relevance.",
      "##H2##Why Planning Consumes Options",
      "Detailed planning consumes options in a specific way: it commits resources and attention to a specific version of the future, which makes it harder to see and respond to alternative versions.",
      "The organizations that navigate uncertainty best are the ones that have maintained option value \u2014 that have kept their resources and attention flexible enough to respond to what the environment actually reveals, rather than locked into what they expected it to reveal.",
      "This is why the Goldline framework exists: to give leaders a way to maintain strategic clarity \u2014 knowing what they are trying to do and why \u2014 while keeping their options open about how to do it.",
    ],
  },
  "reading-the-field-before-you-move": {
    title: "Reading the Field Before You Move",
    date: "October 2025",
    tag: "Situational Awareness",
    excerpt: "Most organizational failures are not execution failures. They are observation failures \u2014 the decision was made before the decision-maker had seen the actual terrain.",
    content: [
      "Most organizational failures are not execution failures. They are observation failures \u2014 the decision was made before the decision-maker had seen the actual terrain.",
      "The pressure to decide is constant in organizational life. And the pressure is not wrong \u2014 indecision has costs too. But the failure mode most organizations face is not too much deliberation. It is deliberation without observation: deciding without first having seen what the situation actually requires.",
      "##H2##The Read Before the Move",
      "The Read framework exists because observation is a skill that must be practiced deliberately. Most leaders are trained to have opinions, to have positions, to have plans. They are not trained to suspend judgment long enough to see what is actually in front of them.",
      "The first and most important step in any leadership situation is to read the field: to understand what is actually happening before deciding what to do about it.",
      "> The decision is not the problem. The decision made before the decision-maker has seen the field is the problem.",
      "##H2##What Reading the Field Requires",
      "Reading the field requires a specific kind of discipline: it requires being willing to be uncomfortable with not-knowing, long enough to let the situation reveal itself.",
      "It means resisting the pressure to have an answer before you have done the observation work. It means being willing to say \u201CI don\u2019t know enough yet\u201D in an environment that rewards having answers. It means being willing to update your model when the evidence contradicts it \u2014 rather than explaining away the evidence.",
      "##H2##The Competitive Advantage of Observation",
      "The leaders and organizations that navigate complexity best are the ones that have developed genuine capacity for observation \u2014 the discipline to see what is actually there, rather than what they expect to see.",
      "This capacity is rare precisely because it is countercultural. Most organizational environments reward speed, decisiveness, and confidence. Observation rewards a different set of qualities: patience, intellectual humility, and the willingness to be surprised.",
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const migrated = articles.find(p => p.slug === slug)
  if (migrated) return { title: migrated.title, description: migrated.excerpt }
  const gec = gecEssays[slug as keyof typeof gecEssays]
  if (gec) return { title: gec.title, description: gec.excerpt }
  return { title: "Article | Gardner Expedition Co." }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

function renderBlock(block: string) {
  if (block.startsWith("##H2##")) {
    return (
      <h2 key={block} style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
        fontWeight: 400,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        lineHeight: 1.25,
        color: "var(--ink)",
      }}>
        {block.slice(6)}
      </h2>
    )
  }
  if (block.startsWith("##H3##")) {
    return (
      <h3 key={block} style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
        fontWeight: 400,
        marginTop: "2rem",
        marginBottom: "0.75rem",
        lineHeight: 1.25,
        color: "var(--ink)",
      }}>
        {block.slice(6)}
      </h3>
    )
  }
  if (block.startsWith("* ")) {
    return (
      <li key={block} style={{
        marginLeft: "1.5rem",
        marginBottom: "0.5rem",
        color: "var(--ink)",
        lineHeight: 1.7,
      }}>
        {block.slice(2)}
      </li>
    )
  }
  if (block.startsWith("> ")) {
    return (
      <blockquote key={block} style={{
        borderLeft: "3px solid var(--gold)",
        paddingLeft: "1.5rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        fontStyle: "italic",
        color: "var(--ink)",
      }}>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>{block.slice(2)}</p>
      </blockquote>
    )
  }
  if (block === "##HR##") {
    return <hr key={"hr"} style={{ border: "none", borderTop: "1px solid var(--soft-gray)", margin: "3rem 0" }} />
  }

  const hasBold = block.includes("**")
  const hasBlockquote = block.startsWith("> ")

  const content = hasBlockquote ? block.slice(2) : block

  if (hasBold) {
    const segments = content.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={block} style={{
        color: "var(--ink)",
        lineHeight: 1.8,
        marginBottom: "1.5rem",
        maxWidth: "68ch",
      }}>
        {segments.map((seg, i) => {
          if (seg.startsWith("**") && seg.endsWith("**")) {
            return <strong key={i} style={{ fontWeight: 600 }}>{seg.slice(2, -2)}</strong>
          }
          return seg
        })}
      </p>
    )
  }

  return (
    <p key={block} style={{
      color: "var(--ink)",
      lineHeight: 1.8,
      marginBottom: "1.5rem",
      maxWidth: "68ch",
    }}>
      {content}
    </p>
  )
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params

  // Check migrated posts
  const migrated = articles.find(p => p.slug === slug)
  if (migrated) {
    return (
      <>
        <SiteNav />
        <div className="page-wrapper">
          <article className="essay-page">
            <header>
              <p className="essay-meta">
                <Link href="/articles" style={{ color: "var(--gold)" }}>Articles</Link>
              </p>
              <h1>{migrated.title}</h1>
              {migrated.date && (
                <p style={{ color: "var(--muted)", marginTop: "0.5rem", fontSize: "0.9rem" }}>
                  {formatDate(migrated.date)}
                </p>
              )}
              {migrated.excerpt && (
                <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7, marginTop: "1rem" }}>
                  {migrated.excerpt}
                </p>
              )}
            </header>
            <div style={{ marginTop: "2rem" }}>
              {migrated.paragraphs.map(block => renderBlock(block))}
            </div>
          </article>
          <div style={{
            maxWidth: "var(--content-width)",
            margin: "0 auto var(--space-xl)",
            padding: "0 var(--space-md)",
            borderTop: "1px solid var(--soft-gray)",
            paddingTop: "var(--space-md)",
          }}>
            <Link href="/articles" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              ← Back to Articles
            </Link>
          </div>
        </div>
        <SiteFooter />
      </>
    )
  }

  // Check GEC essays
  const gec = gecEssays[slug as keyof typeof gecEssays]
  if (gec) {
    return (
      <>
        <SiteNav />
        <div className="page-wrapper">
          <article className="essay-page">
            <header>
              <p className="essay-meta">
                <Link href="/articles" style={{ color: "var(--gold)" }}>Articles</Link>
                {" \u00b7 "}{gec.tag}
              </p>
              <h1>{gec.title}</h1>
              <p style={{ color: "var(--muted)", marginTop: "0.5rem", fontSize: "0.9rem" }}>
                {gec.date}
              </p>
            </header>
            <div style={{ marginTop: "2rem" }}>
              {gec.content.map(block => renderBlock(block))}
            </div>
          </article>
          <div style={{
            maxWidth: "var(--content-width)",
            margin: "0 auto var(--space-xl)",
            padding: "0 var(--space-md)",
            borderTop: "1px solid var(--soft-gray)",
            paddingTop: "var(--space-md)",
          }}>
            <Link href="/articles" style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              ← Back to Articles
            </Link>
          </div>
        </div>
        <SiteFooter />
      </>
    )
  }

  // Not found
  return (
    <>
      <SiteNav />
      <div className="page-wrapper" style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", marginBottom: "1rem" }}>Article not found</h1>
        <Link href="/articles" style={{ color: "var(--gold)" }}>← Back to Articles</Link>
      </div>
      <SiteFooter />
    </>
  )
}
