import React from "react"
import vars from "./index.scss"

console.log('vars = ', vars);
console.log('vars.green = ', vars.green);

export default () =>
  <div style={{
      minHeight: '100vh',
      maxWidth: '100vw',
      background: vars.green
  }}>
      Hello world!
  </div>
