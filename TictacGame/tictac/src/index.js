import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './context';
import {createContext} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

let arr1 = [1,2,3,4,5]
let arr2 = ["1"]

arr1 = arr1.concat(arr2)
console.log(arr1.splice(1,0,"2"))

const customContext = createContext("hello")


//const message = useContext(customContext)


/*
const Toggle = () => {
  const [display, setDisplay] = useState(true);
  const name = useContext(customContext)
  console.log(name)

  return (
    <div>
    { display ? <h1>hello world</h1> : ""}
    <button onClick={() => {setDisplay(!display)}} >Toggle</button>
    </div>
  )
}

Test
<customContext.Provider value={"Aakash"}>
      <Toggle/>
    </customContext.Provider>

*/

root.render(
  
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
