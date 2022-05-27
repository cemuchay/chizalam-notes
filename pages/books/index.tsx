import Link from 'next/link';

export default function Blog({ bookList }) {
    return (
        <div>
            <h1>Blog</h1>

            <ul className='blogLinks'>

                {bookList.map((item: any, index: number) => {
                    return (
                        <li key={index}>
                            <Link href={`/books/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    )
                })
                }

            </ul>

            <div>
                <hr />
                <Link href='/books/manageposts'> Manage Posts </Link>
                <hr />
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let res = await fetch("http://localhost:3000/api/blogposts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let posts = await res.json();

    return {
        props: { bookList: posts },
    };
}