import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Joke = () => {
  const [item, setItem] = useState('');

  useEffect(() => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then()
      .then((res) => setItem(res.data))
      .catch((err) => console.error(err));
  }, []);

  const fetchJoke = () => {
    axios
    .get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
    .then()
    .then((res) => setItem(res.data))
    .catch((err) => console.error(err));
  };

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{item.joke}</p>
          <button type="button" className="btn btn-primary" onClick={fetchJoke}>
            Get Another Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
