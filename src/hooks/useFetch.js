import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [verbs, setVerbs] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setVerbs(json.data));
}, [url])

  return verbs;
}

export default useFetch;