import React from "react"
import { Link } from "gatsby"

const SomethingWentWrong = () => {
  return (
    <>
      <h1>Oops... Something went wrong.</h1>
      <p>Apologies, there may have been a problem fetching your data.</p>
      <p>Hit the button to return home.</p>
      <p> Or use the menu or search bar to navigate out of here.</p>
      <p>
        <li style={{ listStyleType: "none" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <button className="returnHomeButton">
              Ok
          </button>
          </Link>
        </li>
      </p>
    </>
  )
}

export default SomethingWentWrong
