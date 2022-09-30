import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

  const { selectedUser } = useContext(UserContext)

  return (
    <>
      {selectedUser ? (
        <div className='card card-body text-center shadow'>
          <img className='card-img-top m-auto w-50 rounded-circle' src={selectedUser.avatar} alt="" />
          <p className='fs-2 display-4 mt-4'>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p>
          <p className='fs-4 display-5 mt-1'>Email: <span className='text-primary'>{selectedUser.email}</span></p>
          </div>)
          :
          (<p className='display-6 fs-2'>No user selected. Select user to see details.</p>)
      }
    </>
  )
}

export default Profile