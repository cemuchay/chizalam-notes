import type { ReactElement } from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import latestBookImg from '../public/images/theRunAwayJury.png'
// import { Blog } from "../utils/types"
// import { createNoSubstitutionTemplateLiteral } from 'typescript'


export default function Home({ books }) {
  return (
    <div className="container">

      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* <div className={styles.bookCount}>
        Number of Books I have Read This Year is:  {books.length}
      </div> */}

      <article className={styles.latestBook}>
        <Image
          src={latestBookImg}
          alt="The Runaway Jury"
          width={300}
          height={500}
        />
        {/* <h1>{books[0]}</h1> */}
      </article>


    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}



// GET PROPS FOR SERVER SIDE RENDERING
export async function getStaticProps() {
  // get blogs data from API
  const res = await fetch(process.env.API_URL as string)
  const blogposts = await res.json()

  // class BlogPost {
  //   title: string;
  //   content: string;
  //   constructor(title: string, content: string) {
  //     this.title = title;
  //     this.content = content;
  //   }
  // }

  let xx = []


  let zz = []
  for (let i = 0; i < blogposts.length; i++) {

    xx.push(blogposts[i].title)
    let aa = (blogposts)


    let __FOUND = aa.find(function (post, index) {
      if (post.title == 'the-runaway-jury')
        return true;
    });

    console.log(__FOUND);

  }

  // console.log(`Fetched ${blogposts.length} blogs`)

  // return props
  return {
    props: { blogposts },
  }
}

// export async function getStaticProps() {
//   const req = await fetch(`http://localhost:3000/posts.json`);
//   const data = await req.json();

//   return {
//     props: {
//       books: data
//     }
//   };
// }

// export const bookList = async () => {
//   const req = await fetch(`http://localhost:3000/posts.json`);
//   const data = await req.json();

//   console.log(data[0]);

//   return {
//     props: {
//       books: data[0]
//     }
//   };
// }

// bookList();