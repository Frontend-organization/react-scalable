import avatar from '@assets/avatar.jpg'

import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <img src={avatar} alt="initial-build" />
      <h2>Hello from Home.tsx</h2>
      <p>Lets Code!</p>
    </section>
  )
}

export default Home
