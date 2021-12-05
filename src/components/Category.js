import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import ProductsCard from './ProductsCard'
import ProductPagination from './ProductPagination'
import { useHistory } from "react-router-dom"
import { Col, Container, Row } from 'react-bootstrap'

function Category(props) {
    const { category } = props.match.params

    const [filters, setFilters] = useState([])
    const [products, setProducts] = useState([])


    const history = useHistory()

    useEffect(() => {
        const getFilters = async () => {
            const filtersFromServer = await fetchFilters()
            setFilters(filtersFromServer)
        }

        getFilters()
    }, [])

    const fetchFilters = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASICENDPOINT}/filters/categories/${category}`)
        const data = await res.json()

        return data
    }

    const addFilter = async (id, value) => {
        const urlParams = new URLSearchParams(window.location.search);
        const filters = urlParams.getAll(id)
        const indexElement = filters.indexOf(value)
        if (indexElement > -1) {
            return
        }

        urlParams.delete("after")
        urlParams.delete("before")
        urlParams.append(id, [value])

        history.push({ search: urlParams.toString() })

        const products = urlParams.toString()
        const productsResponse = await fetch(`${process.env.REACT_APP_BASICENDPOINT}/filters/products/${category}?${products}`)
        const aproductsResponseJson = await productsResponse.json()

        setProducts(aproductsResponseJson)
    }

    const removeFilter = async (id, value) => {
        const urlParams = new URLSearchParams(window.location.search)
        const filters = urlParams.getAll(id)


        const indexElement = filters.indexOf(value)
        if (indexElement > -1) {
            filters.splice(indexElement, 1)
        }

        urlParams.delete("after")
        urlParams.delete("before")
        urlParams.delete(id)

        filters.forEach(filter => {
            urlParams.append(id, filter)
        })

        const urlParamsString = urlParams.toString()
        history.push({ search: urlParamsString })

        const productsResponse = await fetch(`${process.env.REACT_APP_BASICENDPOINT}/filters/products/${category}?${urlParamsString}`)
        const aproductsResponseJson = await productsResponse.json()

        setProducts(aproductsResponseJson)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3}>
                        <Filters filters={filters} onAddFilter={addFilter} onDeleteFilter={removeFilter} />
                    </Col>
                    <Col xs={9} >
                        <Row>
                            <ProductsCard key={products.toString()} products={products} />
                        </Row>
                        <Row>
                            <ProductPagination products={products} addFilter={addFilter} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category
