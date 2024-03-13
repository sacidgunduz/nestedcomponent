import Card from 'react-bootstrap/Card';

function CnardComponent({width,firstName, lastName, address, gender, email, birthday, phone, avatar}) {
    return (
        <Card  style={{ width: `${width}rem` }}  >
            {avatar && <Card.Img className='' variant="top" src={avatar} rounded/>}
            <Card.Body >
                {firstName && <Card.Title>First Name : {firstName}</Card.Title>}
                {lastName && <Card.Title>Last Name : {lastName}</Card.Title>}
                {address && <Card.Title>Adress : {address}</Card.Title>}
                {gender && <Card.Title>Gender : {gender}</Card.Title>}
                {email && <Card.Title>Email : {email}</Card.Title>}
                {birthday && <Card.Title>Birthday : {birthday}</Card.Title>}
                {phone && <Card.Title>Phone : {phone}</Card.Title>}
            </Card.Body>
        </Card>
    );
}

export default CardComponent;