import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Body = (props) => {
    const { buttonLabel, className } = props;
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
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </>
                </Card>
            </Col>
        </Row>
    );
};

export default Body;