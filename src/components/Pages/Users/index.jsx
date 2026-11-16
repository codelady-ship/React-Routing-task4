import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTitle from '../../../useTitle';

// DummyJSON returns generated sample users, not real people.
const URL = 'https://dummyjson.com/users?limit=30&select=firstName,lastName,email,image,company,address';

const Users = () => {
  useTitle('Users');
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setUsers(data.users);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="page users">
      <h1>Users</h1>
      <p className="muted">Sample profiles from the DummyJSON <code>/users</code> endpoint.</p>
      {status === 'loading' && <p role="status">Loading users...</p>}
      {status === 'error' && <p role="alert" className="error">Users could not be loaded. Please try again later.</p>}
      {status === 'ready' && (
        <ul className="userGrid">
          {users.map(({ id, firstName, lastName, email, image, company, address }) => (
            <li key={id} className="userCard">
              <img src={image} alt={`${firstName} ${lastName}`} width="64" height="64" loading="lazy" />
              <div>
                <h2>{firstName} {lastName}</h2>
                <p className="muted">{company?.title} at {company?.name}</p>
                <p>{email}</p>
                <p className="muted">{address?.city}, {address?.state}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Users;
