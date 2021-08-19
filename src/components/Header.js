import React from 'react'

import { Button, Col, Container, InputGroup, FormControl, Row } from 'react-bootstrap';


function Header() {
    return (
        <div>
            <header >
                <Container>
                    <Row>
                        <Col className='bordera'><h1>Logo</h1></Col>
                        <Col className='bordera' xs={6}>
                            <InputGroup >
                                <FormControl
                                    placeholder="Търси..."
                                    aria-label="Търси..."
                                    aria-describedby="basic-addon2"
                                />
                                <i className="bi bi-search"></i>
                                <Button variant="primary" id="button-addon2">
                                    Търсене
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col className='bordera'><Button variant="outline-primary">Вход</Button></Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Header
