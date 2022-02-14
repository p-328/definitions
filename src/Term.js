import React from 'react';
export default function Term({term, definition, image}) {
  return (
    <div style={{borderStyle: 'dashed', borderWidth: 0.5}}>
        <p style={{fontWeight: 'bold', fontFamily: 'Segoe UI'}}>{term}</p>
        <img src={image} style={{width: 100, height: 100, borderStyle: 'dashed', borderRadius: 10, borderWidth: 0.5}} alt='https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg'></img>
        <p style={{fontFamily: 'Segoe UI'}}>{definition}</p>
    </div>
  )
};