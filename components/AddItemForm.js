import React, { useState } from 'react';

function AddItemForm() {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    // Send data til API-endepunktet her
    fetch('API_ENDPOINT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName }),
    })
      .then((response) => {
        // Behandle responsen etter behov
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AddItemForm;
