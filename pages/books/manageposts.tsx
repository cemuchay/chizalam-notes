import Router from 'next/router'

export default function ManagePosts({ blogList }) {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            title: event.target.first.value,
            content: event.target.last.value,
        }


        const res = await fetch("/api/blogposts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // verify if data was sent to the server.
        if (res.ok) {

            alert("Post was successfully created!")

            // Redirect to the blog page.
            Router.push("/books/manageposts")

        } else {
            alert("Something went wrong!")
        }
    }

    // // Edit a blog post.
    // const editPost = async (id) => {

    //     await fetch(`http://localhost:3000/api/blogposts`, {
    //         method: "DELETE",
    //         body: id
    //     });

    // delete a blog post.
    const deletePost = async (id) => {

        await fetch(`http://localhost:3000/api/blogposts`, {
            method: "DELETE",
            body: id
        });

        // Redirect to the blog page.
        Router.push("/books/manageposts")


    }

    const hi = (bro) => {
        alert(bro)
    }



    return (
        // We pass the event to the handleSubmit() function on submit.
        <div>
            <div>
                <h1>Create a new blog post</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="first">Title</label>
                    <input type="text" id="first" name="first" required />

                    <label htmlFor="last">Content</label>
                    <input type="text" id="last" name="last" required />

                    <button type="submit">Submit</button>
                </form>
            </div>

            <div>
                <hr />
                <h1>Manage Posts</h1>
                <hr />
                {blogList.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>

                            <button onClick={() => deletePost(item._id)} >Edit</button>
                            <button onClick={() => hi(item._id)}>Delete</button>
                            <hr />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
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
        props: { blogList: posts },
    };
}