import React from "react"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

const Layout = ( {children} ) => {

  return (
      <div>
          <NavBar />
              {children}
          <Footer />
      </div>
  )
}

export default Layout