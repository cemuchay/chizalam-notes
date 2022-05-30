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

        // edit a blog post and save it to the database.
        const editPost = async (id: any) => {
            let title = (document.getElementById("first") as HTMLInputElement).value;
            let content = (document.getElementById("last") as HTMLInputElement).value;
    
            const data = {
                id: id,
                title: title,
                content: content
            }
    
            const res = await fetch("/api/blogposts", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
        }

    // Moves the post to be edited to the input elements
    const openPostEdit = async (title, content, id) => {

        // Set the form data.
        (document.getElementById("first") as HTMLInputElement).value = title;
        (document.getElementById("last") as HTMLInputElement).value = content;
        document.querySelector(".submitButton").textContent = "Edit Post";
        document.querySelector("form").setAttribute("onsubmit", `x()`);
        // document.querySelector(".submitButton").setAttribute("onclick", `editPost('${id}')`);

        // // Set the form action to the edit route.
        // document.getElementById("form").action = `/books/manageposts/${id}`;
        // await fetch(`http://localhost:3000/api/blogposts`, {
        //     method: "DELETE",
        //     body: id
        // });
    }



    // delete a blog post.
    const deletePost = async (id) => {

        await fetch(`http://localhost:3000/api/blogposts`, {
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

                            <button onClick={() => openPostEdit(item.title, item.content, item._id)} >Edit</button>
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
