import React from 'react';
import PokeListEntry from './PokeListEntry';

var PokeList = ({ list }) => (
  <div>
    {list.map((mon, i) => (
      <PokeListEntry key={ i } mon={ mon }/>
    ))}
  </div>
)

export default PokeList;