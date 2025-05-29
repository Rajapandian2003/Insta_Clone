import React, { useEffect, useState } from 'react'

function Suggestion() {

  const [profile, setProfile] = useState(null)
  const [sugesstion, setSuggestion] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/profile").
      then(response => response.json()).
      then(data => setProfile(data)).
      catch(error => console.log(error));

    fetch("http://localhost:3000/suggestion").
      then(response => response.json()).
      then(data => setSuggestion(data)).
      catch(error => console.log(error));
  }, [])

  return (
    <div className='m-5'>
      <div className='m-4'>
        {profile ? <div className='d-flex'>
          <img src={profile.profilePic} alt="" className='dp rounded-circle' />
          <div>
            <b>{profile.username}</b><p>رجا🥀</p>
          </div>
          <small className='center ms-auto text-primary'>Switch</small>
        </div> :
          <p>Loading</p>
        }
        <div className='d-flex mt-3'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>
      </div>

      <div className='m-2'>
            {sugesstion.length > 0 ? (
                <div>
                    {sugesstion.map((sugesstions)=>(
                        <div key={sugesstions.id}>
                            <div className='center mb-2 d-flex'>
                                <img src={sugesstions.profilePic} alt="" className='dp rounded-circle'/>
                                <b>{sugesstions.username}</b>
                                <p className='ms-auto text-primary '>Follow</p>
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
    </div>
  )
}

export default Suggestion