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
            <Route path="/:id1">
              <Person />
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

function Person() {
  const { id1 } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPerson(id1)
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  })

  return (
    <div className="wrapper">
      <CardDetail person={list}></CardDetail>
    </div>
  );
}
  
export default App;