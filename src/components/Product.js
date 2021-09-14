import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductTabs from './ProductTabs'

function Product(props) {
    const { id } = props.match.params
    const [product, setProduct] = useState([])
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            const productFromServer = await fetchProduct(id)
            const images = []
            productFromServer.gallery.images.map((image) => images.push({ original: `${process.env.REACT_APP_BASICENDPOINT}/assets/products/${image}`, thumbnail: `${process.env.REACT_APP_BASICENDPOINT}/assets/products/${image}` }))
            setProduct(productFromServer)
            setGallery(images)
        }

        getProduct()
    }, [id])

    const fetchProduct = async (id) => {
        const res = await fetch(`${process.env.REACT_APP_BASICENDPOINT}/products/${id}`)
        const data = await res.json()

        return data
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs="7" className="border">
                        <ProductGallery images={gallery} />
                    </Col>
                    <Col xs="5" className="border">
                        <p>{product.name}</p>
                        <p>{product.minPrice}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProductTabs properties={product.properties} merchants={product.merchants} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product
