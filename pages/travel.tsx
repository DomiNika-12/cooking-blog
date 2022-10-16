import { NextPage } from "next";
import { NavBar } from "../components/navBar";
import { TravelCardLeft } from "../components/travelCardLeft";
import { TravelCardRight } from "../components/travelCardRight";
import styles from '../styles/Travel.module.css'

const data = [
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  },
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  },
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  },
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  },
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  },
  {
    title: 'Rome, Italy',
    image: './rome.JPG',
    time: 'Summer 2022'
  }
]
const Travel: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <div className={styles.cardsContainer}>
        {data.map((e, i) => {
          if (i % 2 == 0) return <TravelCardLeft title={e.title} time={e.time} image={e.image} />
          else return <TravelCardRight title={e.title} time={e.time} image={e.image} />
        })}
      </div>
    </div>
  )
}

export default Travel