import React from 'react';

const ItemList = ({items}) => {

  return items.map((item, idx) => {
    return <li key={idx}>{item}</li>
  });
};

export default ItemList;