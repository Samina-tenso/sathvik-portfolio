import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ReactMarkdown from "react-markdown";




const Blog = () => {

    const [allPosts, setAllPosts] = useState([])
    let posts = [];
    let promises = [];
    const paths = import.meta.glob('../assets/content/**/*.md')


    for (const path in paths) {
        const promise = paths[path]().then((post) => {

            posts.push(post.default)

        });
        promises.push(promise);



    }
    Promise.all(promises).then(() => {
        setAllPosts(posts)
    })


    return (
        < div >
            <h1>Blog page</h1>

            {
                allPosts.map((p, index) => (

                    <ReactMarkdown key={index} children={p} />
                ))
            }

        </div >
    )
}

export default Blog