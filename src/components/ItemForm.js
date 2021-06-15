import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemFormData, setItemFormData] = useState({
    name:"",
    category: "Produce"
  })

  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value
    
    setItemFormData({
      ...itemFormData,
      id: uuid(), 
      [key]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit(itemFormData)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemFormData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
