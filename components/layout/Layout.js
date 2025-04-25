import React from 'react'
import styles from "./Layout.module.css"
import Link from 'next/link'

function Layout({children}) {
  return (
    <>
        <header className={styles.header} >
            <div className={styles.left} >
                <Link href='/' > Aminfood </Link>
            </div>
            <div className={styles.right} >
                <Link href='/menu' >Menu</Link>
                <Link href='/categories' >Categories</Link>
            </div>
        </header>
        <div className={styles.container} >{children}</div>
        <footer className={styles.footer} >
            <a href='https://aminborvayeh.ir'  target='_blank' rel='noreferrer' > aminborvayeh </a>
            &copy;
        </footer>
    </>
  )
}

export default Layout