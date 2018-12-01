import React from 'react';

var PokeListEntry = ({ mon }) => (
  <div>
    <img src={mon.img} />
    <div>{mon.id}</div>
    <div>{mon.name}</div>
  </div>
)

export default PokeListEntry;