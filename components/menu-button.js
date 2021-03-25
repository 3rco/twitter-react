import React from 'react'

import styles from './menu-button.module.css'

const MenuButton = ({ children }) => {
    return <button type="button" className={styles.button}> {children} </button>
}
export default MenuButton