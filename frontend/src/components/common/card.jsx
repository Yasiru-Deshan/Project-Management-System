import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from '../ButtonElements';

const CardWidget  = (props) =>{
    return(
        
        <Card className="text-center" border="primary" style={{ width: '28rem' }}>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
    );
}

export default CardWidget;