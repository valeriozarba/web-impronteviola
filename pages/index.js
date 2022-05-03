import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Impronte Viola</title>
        <meta name="description" content="Impronte viola, melanzana siciliana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         ImpronteViola
        </h1>

        <p className={styles.description}>
          contattaci : impronteviola.it
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://menostudio.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            MenoStudio
          </span>
        </a>
      </footer>
    </div>
  )
}
