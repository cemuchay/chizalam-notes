import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link href="/blog/the-runaway-jury">
                        <a> The Runaway Jury</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/a-promised-land">
                        <a>A Promised Land</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}