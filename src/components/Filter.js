import React from 'react'
import { Form } from 'react-bootstrap'
function Filter({ filter, onAddFilter, onDeleteFilter }) {
    return (

        <div>
            {filter.name}
            <Form>
                {filter.values.map((value) =>
                    <div key={value.toString()} className="mb-3">
                        <Form.Check
                            type='checkbox'
                            id={value}
                            label={value}
                            onChange={(e) => e.target.checked ? onAddFilter(filter.id, value) : onDeleteFilter(filter.id, value)}
                        />
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Filter
