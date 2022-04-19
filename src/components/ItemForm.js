import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [formData, formDataSetter] = useState({
    name: "", 
    category:"Produce",
  })

  function handleSubmit(event) {
    event.preventDefault();
    
    const newItem = {
      id: uuid(),
      ...formData
    }; 

    console.log(newItem);
    onItemFormSubmit(newItem);
  }

  function handleChange(event) {
    formDataSetter({...formData, 
      [event.target.name]: event.target.value
    })

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={formData.category}
        onChange={handleChange}
        >
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
