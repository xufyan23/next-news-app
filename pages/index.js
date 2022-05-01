import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header/>
      <div div className = { `${styles.main} gradient-background` } >
        <h1>Next JS News App</h1>
        <p>Your one stop for the latest news articles</p>
      </div>
    </>
  )
}
