import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faDice } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

const Body = (props) => {
    const { className } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <Row className="mt-3">
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Ryan was here</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    {/* Combat Modal */}
                    <CardTitle tag="h5">Combat Roll</CardTitle>
                    <>
                        <Button onClick={toggle}>
                            <FontAwesomeIcon className='mx-2 fa-3x text-light' icon={faDice} />
                        </Button>
                        <Modal isOpen={modal} size='lg' toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}></ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col className="justify-content-center">
                                        <Label>Attacker</Label>
                                        <Input></Input>
                                    </Col>
                                    <Col className="justify-content-center">
                                        <Label>Defender</Label>
                                        <Input></Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-6'>
                                    </Col>

                                    <Col className='justify-content-center col-6'>
                                        <FontAwesomeIcon className='m-3 fa-3x' icon={faFortAwesomeAlt} />
                                        <FontAwesomeIcon className='m-3 fa-3x' icon={faBan} />
                                    </Col>
                                </Row>


                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Button color="primary" onClick={toggle}>Roll</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Retreat</Button>
                            </ModalFooter>
                        </Modal>
                    </>
                </Card>
            </Col>
        </Row>
    );
};

export default Body;