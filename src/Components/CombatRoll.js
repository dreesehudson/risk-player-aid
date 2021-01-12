import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { worldMap } from '../utilities/territories'
import Select from "react-select";
import Bunker from './Bunker';
import AmmoShortage from './AmmoShortage';
import Odds from './Odds';

const CombatRoll = (props) => {
    const [battleground, setBattleground] = useState('');
    const [attackingFrom, setAttackingFrom] = useState('');
    const [modal, setModal] = useState(false);
    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */ }
    const { className } = props;
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button className='mx-3 bg-white border-0' onClick={toggle}>
                <FontAwesomeIcon className='p-0 fa-2x text-dark' icon={faDiceD6} />
            </Button>
            <Modal isOpen={modal} size='lg' toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <>
                        <Odds />
                        <Row>
                            <Col className="justify-content-center">
                                <Label>Battleground</Label>
                                <Select
                                    className="text-dark"
                                    defaultValue={'Select...'}
                                    onChange={setBattleground}
                                    options={worldMap}
                                />
                            </Col>
                            <Col className="justify-content-center">
                                <Label>Attacking From</Label>
                                {battleground ?
                                    <Select
                                        className="text-dark"
                                        defaultValue={'Select Battleground First'}
                                        onChange={setAttackingFrom}
                                        //needs to only display the adjacent territories to the selected battleground (part of the territory object)
                                        options={worldMap}
                                    />
                                    :
                                    <Select
                                        disabled
                                        className="text-dark"
                                        defaultValue={'Pick Battleground'}
                                        onChange={setAttackingFrom}
                                        //needs to only display the adjacent territories to the selected battleground (part of the territory object)
                                        options={worldMap}
                                    />

                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col className="justify-content-center">
                                <Label>Defender</Label>
                                <Input></Input>
                            </Col>
                            <Col className="justify-content-center">
                                <Label>Attacker</Label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='justify-content-center col-6'>
                                <Bunker
                                    battleground={battleground}
                                />
                                <AmmoShortage
                                    battleground={battleground}
                                />
                            </Col>
                            <Col className='col-6'>
                            </Col>
                        </Row>
                    </>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="primary" onClick={toggle}>Roll</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Retreat</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CombatRoll