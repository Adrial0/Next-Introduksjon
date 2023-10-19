import React from 'react';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';

function ItemsPage() {
  return (
    <div>
      <h1>Item List</h1>
      <ItemList />
      <AddItemForm />
    </div>
  );
}

export default ItemsPage;
