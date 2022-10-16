import { NextPage } from "next";
import { NavBar } from "../components/navBar";
import { Recipie, RecipieProps } from "../components/recipie";
import styles from '../styles/Recipies.module.css'

const data: RecipieProps[] = [
  {
    title: 'Schabowy',
    image: './schabowy.png'
  },
  {
    title: 'tak',
    image: './food.png'
  },
  {
    title: 'asd',
    image: './schabowy.png'
  },
  {
    title: 'asd',
    image: './schabowy.png'
  },
  {
    title: 'asd',
    image: './schabowy.png'
  },
  {
    title: 'asd',
    image: './schabowy.png'
  },
  {
    title: 'asd',
    image: './schabowy.png'
  }
]
const Recipies: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <div>Filter by</div>
      <div className={styles.recipiesContainer}>
        {data.map((e, i) => {
          return (<Recipie title={e.title} image={e.image} key={i} ></Recipie>)
        })}
      </div>

    </div>
  )
}

export default Recipies