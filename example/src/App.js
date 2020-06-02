import React from 'react'
import {useBooleanState} from "use-boolean-state"
import {Icon} from "./Icon"
import lightCat from './cat-light.svg'
import darkCat from './cat-dark.svg'
import styles from './App.module.css'


const App = () => {
  const [showing, show, hide] = useBooleanState(false)
  const [dark, , , toggleDarkMode] = useBooleanState(false)

  return (
    <div className={styles.app + ' ' + (dark ? styles.dark : styles.light)}>
      <div className={styles.container}>
        <div className={styles.row}>
          <button className={styles.button} onClick={show} aria-selected={showing}>
            Show cat <Icon label="cat">🐱</Icon>
          </button>
          <button className={styles.button} onClick={hide} aria-selected={!showing}>
            Hide cat <Icon label="sad cat">😿</Icon>
          </button>
        </div>
        {showing
          ? <img src={dark ? darkCat : lightCat} alt="cat" className={styles.cat_container}/>
          : (
            <div className={styles.cat_container}>
              <span className={styles.message}>Who's there? <Icon label="cute">🥰</Icon></span>
            </div>
          )
        }
        <button onClick={toggleDarkMode} className={styles.button + ' ' + styles.theme}>
          {dark ? 'Time for React' : 'Time for bed'}
        </button>
      </div>
    </div>
  )
}
export default App
