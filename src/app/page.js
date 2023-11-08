'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import userData from './data/userData';

function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            <Link className='text-sky-500' href={`/user?userId=${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;