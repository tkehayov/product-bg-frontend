import React from 'react'
import Filter from './Filter'

function Filters({ filters, onAddFilter, onDeleteFilter }) {
    return (
        <div>
            {filters.map((filter) => (
                <Filter key={filter.name} filter={filter} onAddFilter={onAddFilter} onDeleteFilter={onDeleteFilter} />
            ))}

        </div>
    )
}

export default Filters
