import Head from 'next/head'
import Navbar from './navbar'
// import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <main>
                <Navbar />
                {children}
            </main>
        </>
    )
}