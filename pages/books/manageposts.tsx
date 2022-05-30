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

    // // edit a blog post and save it to the database.
    // const handleEdit = async () => {
    //     // Stop the form from submitting and refreshing the page.
    //     let id = '6290ae48ad3f24c1d31ab39f'

    //     // Get data from the form.
    //     const data = {
    //         id: id,
    //         title: `hi`,
    //         content: `hello`
    //     }


    //     const res = await fetch(`/api/blogposts`, {
    //         method: "PUT",
    //         body: id
    //     });


    // }




    // delete a blog post.
    const deletePost = async (id) => {

        await fetch(`/api/blogposts`, {
            method: "DELETE",
            body: id
        });

        // Redirect to the blog page.
        Router.push("/books/manageposts")
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

                    <button className='submitButton' type="submit">Submit</button>
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

                            {/* <button onClick={handleEdit}>Edit</button> */}
                            <button onClick={() => deletePost(item._id)}>Delete</button>
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
    let res = await fetch("/api/blogposts", {
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
