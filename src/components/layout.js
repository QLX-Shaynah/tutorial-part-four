import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (

    <div
      css={css`
        margin: 0 auto;
        
        max-width: 700px;
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
         
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            margin: center;

          `}
        >
           Just Gatsby with Shaynah
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>


      <Link
        to={`/contact/`}
        css={css`
          float: left;
        `}
      >
        Contact
      </Link>

      {children}
    </div>
  )
}