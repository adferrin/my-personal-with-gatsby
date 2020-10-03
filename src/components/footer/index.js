import React from 'react'

import styles from './footer.module.scss'

export default (props) => (
    <footer className={styles.footer}>
        <p>Copyright &copy; All Rights Reserved 
            &nbsp;{new Date().getFullYear()} AustinFerrin
        </p>
    </footer>
)