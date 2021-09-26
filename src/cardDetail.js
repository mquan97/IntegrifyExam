function CardDetail(props)    {
    return (
        <div className="UserInfo">
            <img className="Avatar"
                //src={props.author.avatarUrl}
                //alt={props.pic}
            />
            <div className="User-name">
                <h1>{props.person.name}</h1>
                <h3>@{props.person.username}</h3>
            </div>
            <div className="User-website">
                    {props.person.website}
            </div>
        </div>
    )
}

export default CardDetail;