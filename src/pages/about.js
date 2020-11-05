import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


function changeBackground(color) {
  document.body.style.background = color;
}


export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title} </h1>
      <p>
      Hi! My name is Shaynah and I am an aspiring software developer. Right now, I am learning how to use Gatsby!
        <body>
        { changeBackground('#ffc0cb') }
        </body>
      </p>
    </Layout>
  )
}
