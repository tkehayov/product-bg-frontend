import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import { useHistory } from "react-router-dom"

function Category(props) {
    const { category } = props.match.params
    // const { subcategory } = props.match.params
    const [filters, setFilters] = useState([])


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


    const addFilter = async (name, value) => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlFilters = urlParams.get('filter');

        const uriComponents = decodeURIComponent(urlFilters)


        if (urlFilters === null) {
            var strJSON = encodeURIComponent(JSON.stringify([{ "name": name, "values": [value] }]));
            urlParams.append("filter", strJSON)

            history.push({ search: urlParams.toString() })

            return
        }

        const filters = JSON.parse(uriComponents)

        //ADD value to already exists filter key/name
        if (filters.filter(f => f.name === name).length > 0) {

            filters.forEach(filter => {
                //TODO consider to remove
                if (filter.name === name) {
                    if (!filter.values.includes(value)) {
                        filter.values.push(value)
                    }
                }
            })
        } else {
            //ADD new filter with key and value
            filters.push({ "name": name, "values": [value] })

        }
        var encodedUri = encodeURIComponent(JSON.stringify(filters));
        urlParams.set("filter", encodedUri)


        history.push({ search: urlParams.toString() })

        // TODO SEND TO BACKEND
        // TODO REMOVE
        const urlFilters2 = urlParams.get('filter');
        console.log(decodeURIComponent(urlFilters2))
    }

    const removeFilter = async (name, value) => {
        //TODO implement
        const urlParams = new URLSearchParams(window.location.search);
        const urlFilters = urlParams.get('filter');

        const uriComponents = decodeURIComponent(urlFilters)
        const filters = JSON.parse(uriComponents)

        if (filters.filter(f => f.name === name).length > 0) {

            filters.forEach(filter => {
                if (filter.name === name) {
                    const indexElement = filter.values.indexOf(value)
                    if (indexElement > -1) {
                        filter.values.splice(indexElement, 1);
                    }
                }
            })
        }

        var encodedUri = encodeURIComponent(JSON.stringify(filters));
        urlParams.set("filter", encodedUri)


        history.push({ search: urlParams.toString() })

        // TODO SEND TO BACKEND
        // TODO REMOVE
        const urlFilters2 = urlParams.get('filter');
        console.log(decodeURIComponent(urlFilters2))

    }

    return (
        <div >
            <Filters filters={filters} onAddFilter={addFilter} onDeleteFilter={removeFilter} />
        </div>
    )
}

export default Category
