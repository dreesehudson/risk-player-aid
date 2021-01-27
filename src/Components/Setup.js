import React, { useState, useContext } from 'react'
import { Collapse, Row, Card, CardHeader, Container, Col, CardBody, Button, Label, Input } from 'reactstrap';
import DataContext from '../utilities/DataContext';
import Unlockables from './Unlockables';

const Setup = (props) => {
    const [draft, setDraft] = useState(false)

    const { players, setPlayers } = useContext(DataContext)
    //const [localPlayers, setLocalPlayers] = useState([])
    const { factions, setFactions } = useContext(DataContext)
    const [numberOfPlayers, setNumberOfPlayers] = useState(5)
    const [playersLocked, setPlayersLocked] = useState(false)
    const [allPlayersReady, setAllPlayersReady] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function addPlayer() {
        setNumberOfPlayers(numberOfPlayers + 1)
        let proxy = players
        proxy.push({ id: players.length, name: "", faction: {} })
        setPlayers(proxy)
        console.log({ players })
    }

    function removePlayer() {
        setNumberOfPlayers(numberOfPlayers - 1)
        let proxy = players
        proxy.pop()
        setPlayers(proxy)
        console.log({ players })
    }
    function readyPlayer() {

    }

    function submitPlayers() {
        //disable player name inputs and open drafting choices
        setPlayersLocked(true)
        //assign player names to context hook
        setPlayers([
            { id: 0, name: "", faction: {}, ready: false },
            { id: 1, name: "", faction: {}, ready: false },
            { id: 2, name: "", faction: {}, ready: false },
            { id: 3, name: "", faction: {}, ready: false },
            { id: 4, name: "", faction: {}, ready: false },
        ])
    }

    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Unlocks</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <Unlockables/>
                        </CardBody>
                        </Card>
                    </Collapse>
                </Col>
            </Row>


            {/* # of Players */}
            <Row className='justify-content-center my-3'>
                <h3 className='mr-2'>Number of Players:</h3>
                {
                    players.length > 3 && !playersLocked ?
                        <Button onClick={() => removePlayer()} className='mx-2 p-2'>-</Button>
                        :
                        <Button disabled className='mx-2 p-2'>-</Button>
                }
                <h3 className='my-1'>{players.length}</h3>
                {
                    players.length < 5 && !playersLocked ?
                        <Button onClick={() => addPlayer()} className='mx-2 p-2'>+</Button>
                        :
                        <Button disabled className='mx-2 p-2'>+</Button>
                }
            </Row>
            {/* Names of Players */}
            <Row>
                {
                    players.map((player, key) => {
                        return (
                            <Col key={key}>
                                {
                                    player.ready ?
                                        <>
                                            <Label>Player Name</Label>
                                            <Input required></Input>
                                            <Button className='bg-success my-3'>Ready</Button>
                                        </>
                                        :
                                        <>
                                            <Label>Player Name</Label>
                                            <Input required></Input>
                                            <Button onClick={() => readyPlayer()} className='bg-danger my-3'>Ready</Button>
                                        </>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
            {
                !playersLocked ?
                    <>
                        {
                            allPlayersReady ?
                                <Button className='my-3' onClick={() => submitPlayers()}>Submit</Button>

                                :

                                <Button disabled className='my-3'>Submit</Button>
                        }
                        {/* Submit button to lock in the player names */}
                    </>
                    :
                    <>
                        <Button className='my-3' onClick={() => setPlayersLocked(false)}>Go Back</Button>
                        {/* If draft has been unlocked (via founding all minor cities) then draft process commence, else pick in pre-determined order */}
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
                                factions.map((faction, key) => {
                                    return (
                                        <>
                                            {
                                                faction.unlocked &&
                                                <Col key={key} className='col-6 mb-3' >
                                                    <Card>
                                                        <CardHeader>{faction.name}</CardHeader>
                                                        <CardBody>
                                                            <ul>
                                                                {faction.bringerOfNuclearFire && <li className='mb-2'>Bringer of Nuclear Fire</li>}
                                                                {faction.startingPower && <li className='mb-2'>{faction.startingPower[0]}</li>}
                                                                {faction.startingPower && <li className='mb-2'>{faction.startingPower[1]}</li>}
                                                                {faction.comebackPower && <li className='mb-2'>{faction.comebackPower}</li>}
                                                                {faction.missilePower && <li className='mb-2'>{faction.missilePower}</li>}
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
                    </>
            }

        </Container >
    );
};

export default Setup;