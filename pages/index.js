import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
          <h2>Hello from Kolkata</h2>
      </div>
    </div>
  )
}
