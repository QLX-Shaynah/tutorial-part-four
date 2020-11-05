import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"



function changeBackground(color) {
  document.body.style.background = color;
}

export default function Home({data}) {
  return (
    <Layout>
      <h1> Welcome to Just Gatsby with Shaynah!</h1>
      <div>
      <body>
        { changeBackground('#78c6d6') }
        </body>
      </div>
    </Layout>
  )
}