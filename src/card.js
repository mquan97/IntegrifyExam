import { useHistory } from 'react-router-dom';

function Card(props)    {
    const history = useHistory();
    const handleClick = id => e => {
        history.push('/' + id);
      }

    return (

            <div className="column">
                <div className="UserInfo">
                    <img className="Avatar" 
                        src= "https://eu.ui-avatars.com/api/?name= Z" 
                        alt= "avatar"
                    />
                    <div className="User-name">
                        <h3>{props.person.name}</h3>
                        <p>@{props.person.username}</p>
                    </div>
                    <div className="User-website">
                            http://{props.person.website}
                    </div>
                    <div className="User-detail">
                        <button className="Button" onClick={handleClick(props.person.id)}>MORE DETAILS</button>
                    </div>
                </div>
            </div>
        
    )
}

export default Card;