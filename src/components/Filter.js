import React from 'react'
import { Form } from 'react-bootstrap'
function Filter({ filter, onAddFilter }) {

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
                            onChange={(e) => e.target.checked ? onAddFilter(filter.name, value) : console.log("TODO IMPLEMENT")}
                        />
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Filter
