import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = ({profile}) => {


  return (
    <div>
      <img src={profile.picture.medium} alt="img" />

      <div className='profile'>
      {profile.gender}
      {profile.name.title}
      {profile.name.first}
      {profile.name.last}
      {profile.email}
      </div>
   
    </div>
  )
}

UserProfile.propTypes ={
  profile: PropTypes.object.isRequired,
}

export default UserProfile