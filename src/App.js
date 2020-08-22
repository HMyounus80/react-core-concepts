import React, { useState,  useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks= ['Anowar', 'alomgir', 'Riyaz', 'Salman sha','bappi','shobo', 'Amir khan']

  const product = [
   { name: 'Photoshop', price: '$89.99'},
   {name: 'Illustrator', price: '$45.58'},
   {name: 'PDF Rander', price: '$12.54' }

  ]
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>I am React Person</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
         {
           product.map(product => <li>{product.name}</li>)
         }
         {
           product.map(pd => <Product product={pd}></Product>)
         }
          
        </ul>
      

        <Person name="Munna" Profession="job"></Person>
        <Person name="Shuvo" Profession="job"></Person>
      </header>
    </div>
  );
}
// Counter useState Component
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
// Users API useState Component
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic User {users.length}</h1>
      {
       users.map( user => <li>{user.name}</li>)
      }
    </div>
  )
}
//  Products Component
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRedius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  // console.log(name,price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>By Now</button>
    </div>
  )
}
// Person Component
function Person(props){
  return (
    <div style={{border: '2px solid yellow', width: '500px'}}>
      <h1>My Name:{props.name}</h1>
  <p>My Profession:{props.Profession}</p>
    </div>
  )
}


export default App;
