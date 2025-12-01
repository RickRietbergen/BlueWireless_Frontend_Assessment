// Q5: Create a React component that fetches and displays a list of users
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();
        if (!cancelled) setUsers(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchUsers();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error while loading: {error}</div>;

  return (
    <div>
      <h2>List of users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <strong>{u.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;