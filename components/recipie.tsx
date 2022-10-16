import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants"
import { FC } from "react"
import Image from 'next'
import styles from '../styles/Recipie.module.css'

export interface RecipieProps {
  title: string;
  image: string;
}

export const Recipie: FC<RecipieProps> = (props) => {
  let imagePath: string = props.image
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <img src={props.image} alt='image' className={styles.image} />
    </div>
  )
}