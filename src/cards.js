import React,{ useEffect, useState } from "react";
import './App.css';
import { getList } from "./list";

function Cards(props)    {

    const [list, setList] = useState([]);

    useEffect(() => {
      let mounted = true;
      getList()
        .then(person =>{
          if(mounted) {
            setList(person)
          }
        })
        return () => mounted = false;
    }, [])

    return (
        <div className="UserInfo">
            <img className="Avatar"
                //src={props.author.avatarUrl}
                //alt={props.pic}
            />
            <div className="User-name">
                {props.list.map((item) =>
                <li key={item.id}>
                    {item.name}
                    </li>)
                }
            </div>
            <div className="User-website">
                    {props.website}
            </div>
            <div className="User-detail">
                <button onClick>
                    MORE DETAILS
                </button>
            </div>
        </div>
    )
}

export default Cards;