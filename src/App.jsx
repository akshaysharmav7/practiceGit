import { useState } from "react";
import "./App.css";

// Add data
// Update data
// Fetch data filtered
// Delete Data

function App() {
  const [details, setDetails] = useState([
    { id:1, name: "Akshay", age: "23" },
    { id:2, name: "Yogesh", age: "24" },
    { id:3, name: "Dharmesh", age: "25" },
    { id:4, name: "snehashish", age: "28" },
    { id:5, name: "Subhashish", age: "30" },
    { id:6, name: "Rohan", age: "32" },
    { id:7, name: "Mohan Sagar", age: "34" },
    { id:8, name: "vijendra", age: "36" },
  ]);

  const addData=()=>{
    setDetails((detail)=>[...detail,{id:10,name:"Riya",age:23}]);
  }

  const deleteData=(id)=>{
    setDetails((details)=>details.filter(details=>details.id !=id))
  }
  
  const updateData=(id, updatedName)=>{
      setDetails(detail => detail.map(item=>item.id===id?{...item,name:updatedName}:item))
  }

  return (
    <>
        <div>
          {/* Fetch and filter */}
            {details.filter((detail)=> detail.age>6).map((detail)=>{return(
                <>
                <ul><li>{detail.name} is {detail.age} years old</li></ul>
                </>
            )})}
        </div>

        {/* Add Data */}
        <button onClick={addData}></button>
        
        {/* Delete Data */}
        <button onClick={()=>deleteData(6)}>Delete Id</button>

        {/* Update Data */}
        <button onClick={()=>updateData(7,"Sachin Dahiya")}>Update</button>
        
    </>

  );
}

export default App;
