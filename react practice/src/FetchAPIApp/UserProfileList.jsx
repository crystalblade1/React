import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const UserProfileList = () => {

    const [profileData, setProfileData] = useState(null)

    useEffect(()=>{

        let isMounted = true;

        async function fetchData(){

            try{
                const res = await fetch("https://randomuser.me/api/?results=5");
                const result = await res.json();
                if(isMounted){
                    setProfileData(result.results)
                }
            }
            catch(err){
                console.error(err)
            }
        }
        fetchData()

     return () => {isMounted = false}
    },[])

    if (!profileData) {
        return <div>Loading...</div>;
    }

    console.log({profileData})
  return (
<div>
    {profileData.map((profile, index) => (
        <UserProfile key={index} profile={profile} />
    ))}
</div>

  )
}

export default UserProfileList