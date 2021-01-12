import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faDice } from '@fortawesome/free-solid-svg-icons'
import { Card, CardTitle, ListGroup, ListGroupItem, Row, Col, Badge, Container } from 'reactstrap';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import { territories } from '../utilities/territories'

function Recruitment(props) {
    return (
        <>
            <Card body>
                {/* Recruit Panel */}
                <CardTitle tag="h5">Recruitment</CardTitle>
                <ListGroup className="list-group-flush">
                    {props.players.map((item, idx) => {
                        return (
                            <Container>
                                <ListGroupItem key={idx}>
                                    <Row>
                                        <Col className="text-left col-8">
                                            {item.name}
                                        </Col>
                                        <Col>
                                            <Badge className="col-4">4</Badge>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </Container>
                        )
                    })
                    }
                </ListGroup>
            </Card>
        </>
    )
}

export default Recruitment