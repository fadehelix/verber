import React from 'react';

import useFetch from './hooks/useFetch';
import './App.css';

function App() {

  const verbs = useFetch('https://iverbapi.herokuapp.com/api/all')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Verber</h1>
      </header>
      <main>
        <section className="verbsContainer">
          <h2>All Verbs</h2>
          <table>
            <thead>
            <tr>
              <th>infinitive</th>
              <th>Past</th>
              <th>Past Participle</th>
            </tr>
            </thead>
            <tbody>
              {verbs.map(verb => (
                <tr key={verb._id}>
                  <td>{verb.infinitive}</td>
                  <td>{verb.past}</td>
                  <td>{verb.pastParticiple}</td>
                </tr>
              ))}
            </tbody>
          </table>  
        </section> 
      </main>
    </div>
  );
}

export default App;
