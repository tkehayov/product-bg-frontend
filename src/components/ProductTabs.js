import React, { useState } from 'react'
import { Tabs, Tab, Table, Image } from 'react-bootstrap'

function ProductTabs({ merchants, properties }) {
    const [key, setKey] = useState('offers');

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                <Tab eventKey="offers" title="Оферти с цени">
                    <Table hover responsive>
                        <tbody>{merchants ? merchants.map((merchant, index) => (
                            <tr key={index}>
                                <td><Image src={merchant.logo} thumbnail /></td>
                                <td><a href={merchant.url}> {merchant.title}</a></td>
                                <td><label>{merchant.price}</label>
                                    <label>{merchant.deliveryPrice}</label></td>
                                <td><a href={merchant.url}>Към Магазина</a></td>
                            </tr>

                        )) : <tr></tr>}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="description" title="Описание">
                    <Table hover responsive>
                        <tbody>{properties ? properties.map((property, index) => (
                            <tr key={index}>
                                <td>{property.name}</td>
                                <td>{property.value}</td>
                            </tr>
                        )) : <tr></tr>}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </>
    )
}

export default ProductTabs
