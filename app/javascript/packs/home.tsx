// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import * as React from "react"
import * as ReactDOM from "react-dom"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

import { ChatApp } from "./pages"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChatApp />,
    document.body.appendChild(document.createElement("div"))
  )
})
