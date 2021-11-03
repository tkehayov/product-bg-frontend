import React from 'react'
import ProductCard from './ProductCard'
import { Col } from 'react-bootstrap'
function ProductsCard({ products })
{
    return (
        <div className="row align-items-start">

            {products.map((product) => (
                <Col key={product.id}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </div>
    )
}

export default ProductsCard
