import './UserList.css';

import React from 'react';

function UserList({ users, deleteUser }) {
  return (
    <div className='userList'>
      <div className='userList-container container'>
        {users.map((user) => {
          return (
            <div className='card' key={users.id}>
              <div className='card-inner'>
                <img
                  src={user.image}
                  alt={user.name}
                  height={150}
                  width={150}
                />
                <h3>
                  {''}
                  {user.firsName} {user.lastName},{user.age}age.
                </h3>
                <p>From:{user.from}</p>
                <p>Job:{user.job}</p>
                <p>Gender:{user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
