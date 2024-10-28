import { useState } from "react";
import "./App.css";

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

  //Data To Add
  const [newid, setId] = useState(0);
  const [newname, setName] = useState("");
  const [newage, setAge] = useState(0);

  const [delId, newDelId]=useState(0);

  const addData = () => {
    setDetails((prevState) => [
      ...prevState,
      { id: newid, name: newname, age: newage },
    ]);
  };

  // Delete Data
  const deleteData =()=>{
      setDetails(prevState => prevState.filter(detail=>detail.id != delId))
    
  }

  return (
    <>
    {/* Map and filter */}
      {details
        .filter((details) => details.age > 20)
        .map((data) => {
          return (
            <>
              <ul>
                {data.name} is {data.age} years old <br />
              </ul>
            </>
          );
        })}

    {/*ADD Data */}
      <input type="number" onChange={(e) => setId(e.target.value)} />
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <input type="text" onKeyDown={(e) => {if (e.key === "Enter") { addData();}}} onChange={(e) => setName(e.target.value)}/>
      <button onClick={addData}>Add New Data</button>
      
    {/* Delete Data */}
        <input type="text" onChange={(e)=>newDelId(e.target.value)} />
        <button onClick={()=>deleteData(delId)}>Delete Id</button>

     {/*  */}
     
    </>

  );
}

export default App;
