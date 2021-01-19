import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

const Rooms = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardBody>
                                <ListGroup flush>
                                    <ListGroupItem action>
                                        <Row>
                                            <Col>
                                                Room: XAGB
                                            </Col>
                                            <Col>
                                                Host: Jim
                                            </Col>
                                            <Col>
                                                <Button>Join</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem action>
                                        <Row>
                                            <Col>
                                                Room: JKKS
                                            </Col>
                                            <Col>
                                                Host: Joe
                                            </Col>
                                            <Col>
                                                <Button>Join</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem action>
                                        <Row>
                                            <Col>
                                                Room: AJIF
                                            </Col>
                                            <Col>
                                                Host: Jack
                                            </Col>
                                            <Col>
                                                <Button>Join</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                            <CardFooter>
                                <Button>
                                    Create New Room
                                </Button>
                            </CardFooter>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Rooms


// {/* <div class="col-md-12">
//   <div class="form-group">
//     <div class="input-group">
//       <span class="input-group-addon">Name</span>
//       <input type="text" class="form-control">
//       <div class="input-group-btn">
//         <button type="button" class="btn btn-warning">
//           X
//         </button>
//       </div>
//     </div>
//   </div>
// </div> */}