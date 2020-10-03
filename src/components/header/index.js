import React from 'react'
import { Link } from 'gatsby'


import styles from './header.module.scss' 

export default () => (
    <header className={styles.header}>
        <h1>Austin Ferrin</h1>
        <ul>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            <li>
                <Link to="/about">About Me</Link>
            </li>
            <li>
                <Link to="/contact">Contact Me</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </header>
)