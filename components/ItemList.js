import React, { useEffect, useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Hent data fra API-endepunktet her og oppdater items-statet
    fetch('API_ENDPOINT_URL')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
