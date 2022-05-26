import Link from 'next/link';

export default function Blog({ link }) {
    return (
        <div>
            <h1>Blog</h1>
            {link[0]}
            <ul>
                <li>
                    <Link href={`/books/${link[0]}`}>
                        <a> The Runaway Jury</a>
                    </Link>
                </li>
                <li>
                    <Link href="/books/a-promised-land">
                        <a>A Promised Land</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // get blogs data from API
    const res = await fetch(process.env.API_URL as string)
    const blogposts = await res.json()

    let blogPostList = []
    for (let i = 0; i < blogposts.length; i++) {
        let blogTitle = blogposts[i].title
        blogPostList.push(blogTitle.replace(/\s+/g, '-').toLowerCase())
        console.log(blogPostList)
    }

    return {
        props: { link: blogPostList }
    };
}