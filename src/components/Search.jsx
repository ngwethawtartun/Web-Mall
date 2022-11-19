import React from "react";
import {useState} from "react"
function Search({ placeholder, data }) {
  
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter=(event)=>{
    const searchWord = event.target.value
    const newFilter =data.filter((value)=>{
      return value.title.includes(searchWord)
    })
    setFilteredData(newFilter)
  }
  return (
    <div>
      <div>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
      </div>
      <div>
        {filteredData.map((value, key) => {
          return (
           
              <p>{value.title} </p>
           
          );
        })}
      </div>
    </div>
  );
}

export default Search;
