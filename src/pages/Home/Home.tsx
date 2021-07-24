import React from "react"

import Taza from "../../assets/avatar.jpg"

//FIXME: fix types for css-modules
import styles from "./Home.module.css"

const Home = () => {
  return (
    <section className={styles.container}>
      <h2>Hello from Home.tsx</h2>
      <img src={Taza} alt="taza" />
    </section>
  )
}

export default Home
