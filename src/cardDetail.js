

function CardDetail(props)    {
    return (
        
        <div className="UserDetails">
            <ul>
                <p>- name: {props.person.name}</p>
                <p>- username: {props.person.username}</p>
                <p>- email: {props.person.email}</p>
                <p>- phone: {props.person.phone}</p>
                <p>- company: {props.person.company.name}</p>
                <p>- website: {props.person.website}</p>
                <p>- address:</p>
                <ul>
                    <li>street: {props.person.address.street}</li>
                    <li>suite: {props.person.address.suite}</li>
                    <li>city: {props.person.address.city}</li>
                    <li>zipcode: {props.person.address.zipcode}</li>
                </ul>
            </ul>
        </div>
    )
}

export default CardDetail;