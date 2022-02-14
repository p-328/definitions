import React from 'react';
import Term from './Term';
export default function TermList({TermList}) {
  return (
    TermList.map(terms => <Term term={terms.term} definition={terms.def} image={terms.img_url} key={terms.id} />)
  )
}
