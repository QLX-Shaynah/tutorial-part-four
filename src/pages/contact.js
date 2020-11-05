import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function changeBackground(color) {
  document.body.style.background = color;
}


export default function Contact({data}) {
  return (
    <Layout>
      <h1>Contact for Just Gatsby with Shaynah </h1>
      <p>
      If you have any tips on javascript feel free to email me! 
      <div>

      </div>

      <div>
          
      </div>
        <a href="mailto:shaynah.boulay@qlx.com">shaynah.boulay@qlx.com</a>
        <body>
        { changeBackground('#faf783') }
        <script>
        </script>
        </body>
      </p>
    </Layout>
  );
}