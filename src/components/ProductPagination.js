import Button from 'react-bootstrap/Button'

function ProductPagination({ products, addFilter }) {

    const next = () => {
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.delete("before");
        var after = products[products.length - 1].id

        return after
    }

    const previous = () => {
        const urlParams = new URLSearchParams(window.location.search)
        urlParams.delete("after")
        var before = products[0].id

        return before
    }

    return (
        <div>
            {products.length > 0 && (
                <div>
                    <Button onClick={() => { addFilter("before", previous()) }} variant="outline-primary">&#8592; предишна</Button>
                    <Button onClick={() => { addFilter("after", next()) }} variant="outline-primary">следваща &#8594;</Button>
                </div>)}

        </div>
    )
}

export default ProductPagination
