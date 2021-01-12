import React, { useState } from 'react'
import { Card, CardHeader, Container, Row, Col, CardBody, CardFooter, Button } from 'reactstrap';

const Unlockables = (props) => {
    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */ }

    return (
        <Container className='mt-3'>
            <Row>
                <div className='card-deck'>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    Founded all 9 minor cities.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>
                        </Card>
                    </Col>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    First Time a Faction is Eliminated from the Game.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>
                        </Card>
                    </Col>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    Open When Three Missiles Are Used On the Same Combat Roll.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>
                        </Card>
                    </Col>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    Open When The World Capital Mark Is About To Go On The Board.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>

                        </Card>
                    </Col>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    Open When One Person Gets to Sign the Board For A Second Time.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>

                        </Card>
                    </Col>
                    <Col className='col-6 mb-3'>
                        <Card>
                            <>
                                <CardBody>
                                    Open When Someone Is About To Place 30+ Troops On The Board And Has A Missile.
                                </CardBody>
                                <CardFooter>
                                    <Button>Open</Button>
                                </CardFooter>
                            </>

                        </Card>
                    </Col>
                </div>

            </Row>


        </Container>
    );
};

export default Unlockables;