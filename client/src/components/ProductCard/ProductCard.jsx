import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductCard = (props) => {

    const truncateDescription = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
      };

    return (
        <Card style={{ width: '18rem'  }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{truncateDescription(props.name, 3)}</Card.Title>
            <Card.Text>
              {truncateDescription(props.description, 10)}
            </Card.Text>
            <Button variant="primary" href={`/${props.id}`}>View Details</Button>
          </Card.Body>
        </Card>
      );
}

export default ProductCard