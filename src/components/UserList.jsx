import React, { useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'

const UserList = () => {

    const {users, getUsers, getProfile} = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div className="list-group h-100 shadow">
        {
            users.map(user => (
                <a className='list-group-item list-group-item-action d-flex justify-content-start' href="#!" key={user.id} onClick={() => getProfile(user.id)}>
                    <img src={user.avatar} className="img-fluid mx-2 me-4 rounded-circle" width='70' alt="" />
                    <p className='my-auto display-6 fs-3'>{`${user.first_name} ${user.last_name}`}</p>
                </a>
            ))
        }
    </div>
  )
}

export default UserList