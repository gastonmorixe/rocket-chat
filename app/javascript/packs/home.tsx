// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import * as React from "react"
import * as ReactDOM from "react-dom"

const Hello = (props) => <div>Hello from React!</div>

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement("div"))
  )
})
