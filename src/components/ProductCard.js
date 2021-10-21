import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';

function ProductsCard({ product })
{

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://laptop.bg/system/images/273269/normal/apple_macbook_air_133_m1_november_2020_mgn93zea_z127_16GB.jpg" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.minPrice} лв
                    </Card.Text>
                    <Link to={`/product/${product.id}`}>
                        <Button variant="primary">преглед</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ProductsCard
