import React, { useState, useContext } from 'react'
import { Row, Card, CardHeader, Container, Col, CardBody, Button, Label, Input } from 'reactstrap';
import { factions } from '../utilities/factions'
import playerContext from '../utilities/PlayerContext';

const Setup = (props) => {
    const [draft, setDraft] = useState(false)

    const { players, addPlayer, removePlayer } = useContext(playerContext)




    return (
        <Container className='mt-3'>
            {/* # of Players */}
            <Row className='justify-content-center my-3'>
                <h3 className='mr-2'>Number of Players:</h3>
                {
                    players.length > 3 ?
                        <Button onClick={() => removePlayer()} className='mx-2 p-2'>-</Button>
                        :
                        <Button disabled className='mx-2 p-2'>-</Button>
                }
                <h3 className='my-1'>{players.length}</h3>
                {
                    players.length < 5 ?
                        <Button onClick={() => addPlayer()} className='mx-2 p-2'>+</Button>
                        :
                        <Button disabled className='mx-2 p-2'>+</Button>
                }

            </Row>
            {/* Names of Players */}
            <Row>
                {
                    <Col className='col-3'>
                        <Label>Name:</Label>
                        <Input />
                    </Col>
                }
            </Row>
            {
                draft ?
                    //show draft cards and snake draft for Faction, Turn Order, HQ Placement Order, Starting Troops, Coin Cards
                    <>
                        <h3>Draft True</h3>
                    </>
                    :
                    <>
                        <h3>Draft False</h3>
                    </>
                //Pick Order to select Faction, Turn Order, HQ Placement Order
            }
            <Row>
                {
                    factions.map((faction, idx) => {
                        return (
                            <>
                                {
                                    faction.unlocked &&
                                    <Col className='col-6 mb-3' >
                                        <Card>
                                            <CardHeader>{faction.name}</CardHeader>
                                            <CardBody>
                                                <ul>
                                                    {faction.bringerOfNuclearFire && <li className='mb-2'>Bringer of Nuclear Fire</li>}
                                                    {faction.startingPower && <li className='mb-2'>{faction.startingPower[0]}</li>}
                                                    {faction.startingPower && <li className='mb-2'>{faction.startingPower[1]}</li>}
                                                    {faction.comebackPower && <li className='mb-2'>{faction.comebackPower}</li>}
                                                    {faction.misslePower && <li className='mb-2'>{faction.misslePower}</li>}
                                                    {faction.weakness && <li className='mb-2'>{faction.weakness}</li>}
                                                    {faction.privateMission && <li className='mb-2'>{faction.privateMission}</li>}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                }
                            </>
                        )
                    })
                }
            </Row>
            <Row>
                {

                }
            </Row>

        </Container >
    );
};

export default Setup;