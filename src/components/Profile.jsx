import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

  const { selectedUser } = useContext(UserContext)

  return (
    <>
      {selectedUser ? (
        <div className='card card-body text-center'>
          <img className='card-img-top m-auto w-25' src={selectedUser.avatar} alt="" />
            <h1 className='fs-2 mt-3'>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
            <h3 className='fs-4'>Email: {selectedUser.email}</h3>
        </div>) : (<p className='fs-3'>No user selected.</p>)}
    </>
  )
}

export default Profile