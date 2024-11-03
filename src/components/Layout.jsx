import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import styles from "../styles/Layout.module.css"
import { useContext } from "react"
import { Theme } from "../context/ThemeProvider.jsx"

const Layout = ( {children} ) => {
    const {dark} = useContext(Theme)

    return (
        <div className={styles.layout}>
            <NavBar />
            <div className={styles[`main-container-${dark ? "dark" : "light"}`]}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout

