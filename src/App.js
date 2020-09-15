import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation, Redirect } from 'react-router-dom';

import useFetch from './hooks/useFetch';
import Exercise from './components/Exercise';
import getRandomVerb from './helpers/getRandomElementFromArray';

import './App.css';
import Page from './components/Page';

function App() {
  const emptyVerb = {
    infinitive: '',
    past: '',
    pastParticiple: '',
  };

  const location = useLocation();

  const verbs = useFetch('https://iverbapi.herokuapp.com/api/all');
  const [verb, setVerb] = useState(emptyVerb);

  useEffect(() => {
    if (verbs.length > 0) {
      setVerb(getRandomVerb(verbs));
    }
  }, [verbs]);

  const handleVerbSearch = (event) => {
    const { value } = event.target;
    if (value) {
      setVerb(verbs.find((v) => v.infinitive === value));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to="/">Verber</Link>
        </h1>
      </header>
      <main>
        {location.pathname === '/' && (
          <nav className="AppNav">
            <div className="AppNavItem">
              <Link to="/search">Search for a verb</Link>
            </div>
            <div className="AppNavItem">
              <Link to="/challenge">Take a challenge</Link>
            </div>
          </nav>
        )}

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/challenge" />} />
          <Route path="/search">
            <Page title="Search">
              <div className="verbFinder">
                <form>
                  <Exercise verb={verb}>
                    <label htmlFor="questionInput">
                      Find infinitive form verb
                    </label>
                    <input
                      id="questionInput"
                      type="search"
                      list="verbs"
                      autoComplete="off"
                      onBlur={handleVerbSearch}
                    />
                    <datalist id="verbs">
                      {verbs.map((v) => (
                        <option key={`option-${v._id}`}>{v.infinitive}</option>
                      ))}
                    </datalist>
                  </Exercise>
                </form>
              </div>
            </Page>
          </Route>
          <Route path="/challenge">
            <Page title="Challenge">
              <div className="verbFinder">
                <form>
                  <Exercise verb={verb}>
                    <div className="RandomVerb">{verb.infinitive}</div>
                  </Exercise>
                </form>
              </div>
            </Page>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
