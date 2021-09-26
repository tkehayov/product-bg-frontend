import React from 'react'
import Filter from './Filter'

function Filters({ filters,onAddFilter }) {
    return (
        <div>
            {filters.map((filter) => (
                <Filter key={filter.name} filter={filter} onAddFilter={onAddFilter} />
            ))}

        </div>
    )
}

export default Filters
