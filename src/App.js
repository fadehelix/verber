import React, {useState} from 'react';

import useFetch from './hooks/useFetch';
import Answer from './components/Answer';
import './App.css';

function App() {

  const verbs = useFetch('https://iverbapi.herokuapp.com/api/all')
  const [verb, setVerb] = useState({
    infinitive: "",
    past: "",
    pastParticiple: ""
  });

  const handleVerbSearch = (event) => {
    setVerb(verbs.find(verb => verb.infinitive === event.target.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Verber</h1>
      </header>
      <main>
        <section className="verbFinder">
          <h2>Find a verb</h2>
          <form>
            <div className="question">
            <label htmlFor="firstAnswerInput">Find infinitive form verb</label>
            <input
              id="questionInput" 
              type="search" 
              list="verbs" 
              autoComplete="off" 
              onBlur={handleVerbSearch}
            />
            </div>
            <Answer verb={verb.past}>Past</Answer>
            <Answer verb={verb.pastParticiple}>Past Participle</Answer>

            {/* <input type="text" onBlur={handleVerbCheck}/>  */}
            <datalist id="verbs">
              {verbs.map(verb => (
                <option key={`option-${verb._id}`}>{verb.infinitive}</option>
              ))}  
            </datalist> 
          </form>
        </section>
        <section className="verbList">
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
