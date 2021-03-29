import React from 'react'

import styles from './navigation-button.module.css'
import Button from './button'

const NavButton = ({ children }) => {
    return <Button className={styles.navButton}> {children} </Button>
}
export default NavButton