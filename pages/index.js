import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar/Navbar'
import Categorys from '../components/Categorys/Categorys'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile</title>
      </Head>

      <Navbar/>
      
      <main>
          <section className={styles.hero}>
            <div className={styles.heroContent} >    
                <div className='overline secondary-text__on-dark'>New product</div>
                <h1>XX99 Mark II Headphones</h1>
                <p className="secondary-text__on-dark">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <a href="./mark-2.html">  <button className='button-one'>See product </button></a>
            </div>
        </section>

        <Categorys />
        
      </main>
    </div>
  )
}
