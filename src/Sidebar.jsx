import React from 'react'

function Sidebar() {
  return (
    <div className='m-3 position-fixed'>
        <div>
            <img className='logo-text' src="data\assets\Instagram_text.png" alt=""/>
        </div>
        <div className='sideBar d-flex flex-column gap-3'>
            <div><i className="bi bi-house"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-camera-reels"></i>Reels</div>
            <div><i className="bi bi-chat-dots"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notification</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div><img src="data\assets\profile.jpg" className='profile'/>Profile</div>
        </div>
        <div className='sideBar position-fixed bottom-0 d-flex flex-column gap-2 mb-3'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar