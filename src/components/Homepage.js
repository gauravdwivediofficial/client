import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then(response => response.json())
      .then(data => {
        setJokes(data.jokes);
      });
  }, []);

  return (
    <div className="container">
      <h2>Welcome to the Homepage!</h2>
      <h3>Jokes:</h3>
      {jokes.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading jokes...</p>
      )}
    </div>
  );
};

export default Homepage;