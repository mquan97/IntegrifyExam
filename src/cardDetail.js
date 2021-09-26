function CardDetail(props)    {
    return (
        <div className="UserInfo">
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