import React, {  } from 'react'
import {  } from '@fortawesome/react-fontawesome'
import { Card, CardTitle, ListGroup, ListGroupItem, Row, Col, Badge, Container } from 'reactstrap';

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