import React from "react"

const SomethingWentWrong = () => {
  const handleRefresh = () => {
    window.location.reload(false)
  }

  return (
    <>
      <h1>Oops... Something went wrong.</h1>
      <p>Apologies, there may have been a problem fetching your data.</p>
      <p>Hit the button to return home.</p>
      <p> Or use the menu or search bar to navigate out of here.</p>
      <p>
        <li style={{ listStyleType: "none" }}>
          <button className="returnHomeButton" onClick={handleRefresh}>
            Ok
          </button>
        </li>
      </p>
    </>
  )
}

export default SomethingWentWrong
