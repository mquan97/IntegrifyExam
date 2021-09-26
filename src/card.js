import { useHistory } from 'react-router-dom';

function Card(props)    {
    const history = useHistory();
    const handleClick = id => e => {
        history.push('/' + id);
      }

    return (
        <div className="UserInfo">
            <img className="Avatar" alt="avatar"
                //src={props.author.avatarUrl}
                //alt={props.pic}
            />
            <div className="User-name">
                <h1>{props.person.name}</h1>
                <h3>@{props.person.username}</h3>
            </div>
            <div className="User-website">
                    http://{props.person.website}
            </div>
            <div className="User-detail">
            <button onClick={handleClick(props.person.id)}>More details</button>
            </div>
        </div>
    )
}

export default Card;