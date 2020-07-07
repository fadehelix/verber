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
    const {value} = event.target;
    if(value) {
      setVerb(verbs.find(verb => verb.infinitive === value))
    }
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
              <datalist id="verbs">
                {verbs.map(verb => (
                  <option key={`option-${verb._id}`}>{verb.infinitive}</option>
                ))}  
              </datalist> 
            </div>
            {verb ? <>
              <Answer verb={verb.past}>Past</Answer>
              <Answer verb={verb.pastParticiple}>Past Participle</Answer>
            </> : <span className="answers answers--error">"Invalid word :("</span>}
          </form>
        </section> 
      </main>
    </div>
  );
}

export default App;
