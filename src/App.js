import React from 'react';

import useFetch from './useFetch';

import './App.css';

const App = () => {

  React.useEffect(() => {
    console.log("APP updated");
  });

  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon', {});

  const getData = () => {
    if (error.status) return <li><p>Error: {error.message}</p></li>;
    if (loading) return <li><p>Loading...</p></li>;
    if (data.results) return data.results.map((poke, key) => <li key={key}><p>{poke.name}</p></li>)
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <ul>
        {getData()}
      </ul>
    </div>
  );

}

export default App;
