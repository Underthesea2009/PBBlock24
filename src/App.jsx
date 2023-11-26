import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import './puppypals.css'
import {puppyList} from './data.js'
// npm run dev - this is the command to run the server
function App() {
  // const [count, setCount] = useState(0)
  //console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  
  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
           })
       }
     {featPupId && 
        (
          <div className="renderDetails">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        ) 
     }
    </div>
  );
}

export default App


