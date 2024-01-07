import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function CustomCard(props) {
    const navigate= useNavigate(); 
    return (
        <div><br />
            <Card style={{ width: '18rem', height:'420px' }}>
                <Card.Img variant="top" src={props.img} height='290px'/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button onClick={e=> navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomCard;