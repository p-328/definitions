import React from 'react';
import { useRef, useState, useEffect } from 'react';
import TermList from './TermList.js';
const storage_key = 'terms.db';

function App() {
  const uuid = require('uuid').v4;
  const termRef = useRef();
  const definitionRef = useRef();
  const urlRef = useRef();
  const removeRef = useRef();
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    const itemStorage = JSON.parse(localStorage.getItem(storage_key));
    if(itemStorage) setTerms(itemStorage);
  }, [])
  useEffect(() => {
    localStorage.setItem(storage_key, JSON.stringify(terms));
  }, [terms]);
  const removeTerm = () => {
    const removeReference = removeRef.current.value;
    const newArr = terms.filter(t => t.term !== removeReference);
    setTerms(newArr);
    removeRef.current.value = null;
  };
  const handleClick = () => {
    const termVal = termRef.current.value;
    const defVal = definitionRef.current.value;
    const imgVal = urlRef.current.value;
    if (termVal === '' && defVal === '' && imgVal === '') return
      setTerms(prevTerms => [...prevTerms,
        {
          term: termVal,
          def: defVal,
          img: imgVal,
          id: uuid()
        }
      ]);
    termRef.current.value = null;
    definitionRef.current.value = null;
    urlRef.current.value = null;
  };
  return (
    <div style={{justifyContent: 'spaced-evenly', alignItems: 'center', overflowY: 'auto'}}>
      <TermList TermList={terms} />
      <input placeholder='Term' ref={termRef} style={{fontFamily: 'Segoe UI'}}></input>
      <input placeholder='Image URL' ref={urlRef} style={{fontFamily: 'Segoe UI'}}></input>
      <input placeholder='Definition' ref={definitionRef} style={{fontFamily: 'Segoe UI'}}></input>
      <button onClick={handleClick} style={{fontFamily: 'Segoe UI'}}>Create</button>
      <input placeholder='Enter term to remove...' ref={removeRef} style={{fontFamily: 'Segoe UI'}}></input>
      <button onClick={removeTerm} style={{fontFamily: 'Segoe UI'}}>Remove</button>
    </div>
  );
}

export default App;
