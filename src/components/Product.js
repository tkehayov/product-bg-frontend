import React, { useState,useEffect } from 'react'

function Product(props) {
    const { productName } = props.match.params
    const  [product,setProduct] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            const productFromServer = await fetchProduct(productName)
            setProduct(productFromServer)
          }
      
          getProduct()
    },[])

    const fetchProduct = async (id) => {
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()
        
        return data;
    }

    return (


        <div>
            <p>{product.id}</p>
        </div>
    )
}

export default Product
