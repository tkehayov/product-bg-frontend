import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductProperties from './ProductProperties'

function Product(props) {
    const { id } = props.match.params
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const getProduct = async () => {
            const productFromServer = await fetchProduct(id)
            setProduct(productFromServer)
        }

        getProduct()
    }, [id])

    const fetchProduct = async (id) => {
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()

        return data;
    }

    // TODO get from server
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <div>
            <Container>
                <Row>
                    <Col xs="6" className="border">
                        <ProductGallery images={images} />
                    </Col>
                    <Col xs="5" className="border">
                        <p>{product.name}</p>
                        <ProductProperties properties={product.properties}/>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
