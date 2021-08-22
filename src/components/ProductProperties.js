import React from 'react'

function ProductProperties({ properties }) {
    return (
        <div>{properties ? properties.map((property,index) => (
            <div key={index}>
                <p>{property.name} : {property.value}</p>
            </div>
        )) : ""}
        </div>
    )
}

export default ProductProperties
