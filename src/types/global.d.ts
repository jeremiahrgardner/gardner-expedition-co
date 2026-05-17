// CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// Side-effect CSS imports (globals.css)
declare module '*.css' {
  const css: string
  export default css
}