import React from 'react'

import Header from '../header'
import Footer from '../footer'

import '../../styles/reset.scss'
import styles from './layout.module.scss'

export default (props) => (
    <div className={styles.container}>
        <Header />
            <main>
                {props.children}
            </main>
        <Footer />
    </div>
)