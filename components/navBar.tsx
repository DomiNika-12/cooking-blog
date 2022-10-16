import { FC } from "react"
import styles from '../styles/NavBar.module.css'

export const NavBar: FC = () => {
  return (
    <nav className={styles.container}>
      <a href={'/recipies'}>🍝
        <span>
          recipies
        </span></a>
      <a href={'/lucky'}>🎲 feeling lucky</a>
      <div className={styles.title}>Pinch of Paczki</div>
      <a href={'/blog'}>🖌 blog</a>
      <a href={'/about'}>🇵🇱 about</a>
      <a href={'/travel'}>travel 🌍</a>
    </nav>
  )
}