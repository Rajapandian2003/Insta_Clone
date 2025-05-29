import React, { useEffect, useState } from 'react'

function Post() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000/post").
            then(response => response.json()).
            then(data => setPosts(data)).
            catch(error => console.log(error));

    }, [])

    return (
        <div className='d-flex justify-content-center'>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post)=>(
                        <div key={post.id}>
                            <div className='mb-2 d-flex center'>
                                <img src={post.user.profilePic} alt="" className='dp rounded-circle'/>
                                <b>{post.user.username}</b>
                                <i className="bi bi-three-dots-vertical ms-auto"></i>
                            </div>
                            <div >
                                <img src={post.image} alt="" className='post'/>
                            </div>
                            <div className='mt-3'>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-send"></i>
                            </div>
                            <div><b>{post.likes} Likes</b></div>
                            <div className='mb-3'>
                                <p><b>{post.user.username}</b> {post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ):(
                <div>
                    Loading Post
                </div>
            )}
        </div>
    )
}

export default Post