import Head from 'next/head'
import Link from 'next/link'
import styles from '@src/styles/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>STATIC PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>RENDERING MODES</h1>
        <div className={styles.subtitle}>Click on one of the link below</div>
        <span>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
          -
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
          -
          <Link href="/isr">
            <a>ISR</a>
          </Link>
          -
          <Link href="/csr">
            <a>CSR</a>
          </Link>
        </span>
      </main>

      <footer className={styles.footer}>
        ***
      </footer>
    </div>
  )
}
