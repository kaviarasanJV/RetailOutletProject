import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import React from 'react';
import Home from './components/header/Home';
import About from './components/header/About';
import Contactus from './components/header/Contactus';
import ErrorPage from './components/header/ErrorPage';
import HookCounterone from './HookCounterone';
import login from './components/header/Login';
import register from './components/header/Register';

//import Marquee from 'react-double-Marquee';
import {useState,useEffect} from 'react';
import axios from 'axios';

import jvagenciespic from './assets/JVAGENCIES.png';
import outlook from './assets/OUTLOOK.jpg';

function App() {
const [temp,updateTemp]=useState([]);
//const [tempfetch,updateTempfetch]=useState([]);


// const sampleJSON = {
//   "object": {
//     "name": "Pluralsight",
//     "number": 1,
//     "address": "India",
//     "website": "https://www.pluralsight.com/"
//   }
// }

// {Object.keys(sampleJSON.object).map((key, i) => (
//   <p>
//     <span>{key} : {sampleJSON.object[key]}</span>
//     </p>
// ))
// }

// useEffect(()=>{
//           fetch('https://jsonplaceholder.typicode.com/posts')
//           .then(response=>response.json())
//           .then(json=>updateTempfetch(json))


// })
  useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts')
          // .then(response=> response.json())
          // .then(json=>updateTemp(json))
          .then(response=>
          {
            alert("url successs");
            console.log(response.data);
            updateTemp(response.data);  
             // let tempapi=response.data.map(obj=>{
            // return {Title:obj.title}})
            // updateTemp(tempapi); 
          }
          )
          .catch(()=>
          {
            console.log("please enter correct url");
          })

          ///documentations/v3#/
axios.get('https://www.coingecko.com/api/documentations/v3#/coins/get_coins_markets')
.then(response=>{
console.log(response.data);
})
.catch(()=>{
  console.log("PLease enter correct coin link");
}
)

          },[])

//<pre>JSON.stringfy(tits.Title)</pre>

// {temp.map((objs) =>{
//   return  objs
//   }

// {tempfetch.map(item=>{
//   return <pre>{JSON.stringfy(item)}</pre>
// })}

// .id}<br></br>{temp1.title}





  return (

  <Router>
      <div className="Backgroud-color">
      {/* <HookCounterone/> */}
      <ul className="App-header">
          <NavLink to="/" exact activeStyle={{color:"red"} } className="widthPropery">
            Home
          </NavLink>
          
          <NavLink to="/a" exact activeStyle={{color:"red"}} className="widthPropery" >
            About us
          </NavLink>
          
          <NavLink to="/c" exact activeStyle={{color:"red"}} className="widthPropery">
          Contactus
          </NavLink>
          
          <NavLink to="/l" exact activeStyle={{color:"red"}} className="widthPropery">
            login
          </NavLink>
          
          <NavLink to="/r" exact activeStyle={{color:"red"}} className="widthPropery">
                  Register
          </NavLink>
        </ul>

        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a" component={About} />
        <Route  exact path="/c" component={Contactus} />
        <Route  exact path="/l" component={login} />
        <Route  exact path="/r" component={register} />
        <Route  exact path="*" component={ErrorPage} />
        </Switch>

        <h1 className="App">J.V.AGENCIES</h1> 
        <div className="Image-prop">
            <img src={jvagenciespic} alt="logo" />
        </div>
      
        <HookCounterone/>
        
<a href="https://outlook.live.com/">
        <img src={outlook} alt=""/>
</a> 
  
<div>
<h1>
  <table border="1" align="center" font="bold" text-color="red"  font-family="Times New Roman">
{temp.map(temp1=>{
  return (<tr><pre>{temp1.title}</pre></tr>)
})}

</table>

</h1>
</div>





      </div>
  </Router>
      /* <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */


        /* <Router>
        <nav>
        <Link to="https://outlook.live.com/">
            <img src={jvagenciespic}/>
        </Link>
        </nav>
        <Routes>
          <Route path="" element=""/>
       </Routes>
        </Router> */



  );
}
export default App;
