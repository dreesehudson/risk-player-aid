import React, { useState, useContext } from 'react'
import { Card, CardTitle, Row, Col, Container, CardGroup, CardDeck, Button } from 'reactstrap';
import RedStarTracker from './RedStarTracker'
import MissleTracker from './MissleTracker'
import Recruitment from './Recruitment'
import MapTabs from './MapTabs';
import DataContext from '../utilities/DataContext';

const PlayerDashboard = (props) => {

    //map through each continent within the territories JSON
    //return array of territories objects

    const { players } = useContext(DataContext)


    return (
        <Container className='mt-3'>
            {/* <Row className='mt-3'> */}
            <CardDeck>
                <Card>
                    <Row className='my-2'>
                        <Col>
                            <h3 className='my-2'>Active Player</h3>
                        </Col>
                        <Col>
                            <Button className='my-1'>Recruit Troops</Button>
                            <Button className='my-1'>Attack and Expand</Button>
                            <Button className='my-1'>Friendly Move</Button>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row className="my-3 justify-content-center">
                        {players.map((item, idx) => {
                            return (
                                <Col key={idx} className='my-2'>
                                    <RedStarTracker player={item} />
                                    <MissleTracker player ={item} />
                                </Col>
                            )
                        })
                        }
                    </Row>
                </Card>
            </CardDeck>

            <Row className="mt-3">
                <Col>
                    <Row>
                        <Col>
                            <Recruitment
                                players={players}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    {/* Territory Pane */}
                    <Card body>
                        <CardTitle tag="h5">Territories</CardTitle>
                        <MapTabs
                            players={players}
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerDashboard;