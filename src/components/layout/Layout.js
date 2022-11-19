import React from 'react'
import Footer from './Footer'
import styles from './Layout.module.css'
import MainNavigation from './MainNavigation'
const Layout = (props) => {
  return (
    <div>
        <MainNavigation />
        <main className={styles.main}>
{props.children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout