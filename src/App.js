import React,{ useEffect, useState } from "react";
import './App.css';
import {getList, getPerson} from "./list";
import Card from "./card";
import CardDetail from "./cardDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id">
              <People />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
      {list.map(item => <Card person={item}></Card>)}
   </div>
  )
}

function People() {
  const { id } = useParams();

  const [citizen, setCitizen] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPerson(id)
      .then(items => {
        if(mounted) {
          setCitizen(items)
        }
      })
    return () => mounted = false;
  })
   return ( 
    citizen.length !== 0 &&
    <div>
      <CardDetail person={citizen}></CardDetail>
    </div>
  );
}
  
export default App;