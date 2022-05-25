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

export async function getStaticProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.name}.json`);
    console.log(req);
    const data = await req.json();

    return {
        props: {post: data}
    };
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/posts.json`);
    const data = await req.json();

    const paths = data.map(post => ({
        params: {
            name: post
        }
    }));

    return {
        paths,
        fallback: false
    };
}