import React, { useEffect, useState } from 'react'

function Story() {

  const [story, setStory] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/story").
      then(response => response.json()).
      then(data => setStory(data)).
      catch(error => console.log(error))
  }, [])

  return (
    <div className='d-flex m-3 g-3'>
      {story.length > 0 ? (
        story.map((storys) => (
          <div key={storys.id} className='m-2 mx-2'>
            <div className='grd'>
              <img src={storys.user.profilePic} alt="" className='story-dp rounded-circle' />
            </div>
            <p className='text-truncate' style={{ width: "50px" }}>{storys.user.username}</p>
          </div>
        ))
      ) : (<p>Loading</p>)}
    </div>
  )
}

export default Story