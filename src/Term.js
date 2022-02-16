import React from 'react';
export default function Term({term, definition, image}) {
  return (
    <div style={{borderStyle: 'dashed', borderWidth: 0.5}}>
        <p style={{fontWeight: 'bold', fontFamily: 'Segoe UI'}}>{term}</p>
        <p style={{fontFamily: 'Segoe UI'}}>{definition}</p>
    </div>
  )
};