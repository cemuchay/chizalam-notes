import { useRouter } from "next/router";
import Head from "next/head";

export default function BlogPost({ post }) {

    const router = useRouter();
    const { name } = router.query;

    return (
        <div>
            <Head>
                <title>{post.name}</title>
            </Head>

            <h1>{name}</h1>
            <p>{post.content}</p>

        </div>
    );
}

export async function getServerSideProps({ params }) {
    // get blogs data from API
    const res = await fetch(process.env.API_URL as string)
    const blogposts = await res.json()

    let blogItem = blogposts.find(function (post: { title: string; }, index: any) {
        if ((post.title).replace(/\s+/g, '-').toLowerCase() == `${params.name}`)
            return true;
    });

    return {
        props: { post: blogItem }
    };
}

// export async function getStaticPaths() {
//     // get blogs data from API
//     const res = await fetch(process.env.API_URL as string)
//     const blogposts = await res.json()

//     let blogPostList = []
//     for (let i = 0; i < blogposts.length; i++) {
//         let blogTitle = blogposts[i].title
//         blogPostList.push(blogTitle.replace(/\s+/g, '-').toLowerCase())
//     }

//     const paths = blogPostList.map(post => ({
//         params: {
//             name: post
//         }
//     }));
//     // return props
//     return {
//         paths,
//         fallback: false
//     }
// }