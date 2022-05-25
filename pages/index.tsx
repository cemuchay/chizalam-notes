import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Create Next App</title>
      </Head>

      <div>Hello Guys</div>
      <Link href="/blog"> Blog </Link>
      hii
    </div>
  )
}
