import React from "react"
import { Link } from "gatsby"

const SomethingWentWrong = () => (
  <>
    <h1>Oops... Something went wrong.</h1>
    <p>Apologies, there may have been a problem fetching your data.</p>
    <p>Hit the button to return home.</p>
    <p>
      <Link to="/">
        <li style={{ listStyleType: "none" }}>
          <button className="returnHomeButton">Ok</button>
        </li>
      </Link>
    </p>
  </>
)

export default SomethingWentWrong
