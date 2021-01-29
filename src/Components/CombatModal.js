import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChessRook, faDiceD6, faFlag, faShieldAlt, faShieldVirus, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import Select from "react-select";
// import AmmoShortage from './AmmoShortage';
// import Odds from './Odds';
import DataContext from '../utilities/DataContext';
import Die from './Die';
// import { faFortAwesome, faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
import Scar from './Scar';


const CombatModal = (props) => {
    //const [battleground, setBattleground] = useState(`${props.battleground}`);
    //const [attackingFrom, setAttackingFrom] = useState('');
    const [modal, setModal] = useState(false);
    const { className } = props;
    const toggle = () => setModal(!modal);
    // const { territories, setTerritories } = useContext(DataContext)
    const [att, setAtt] = useState(3)
    const [attRoll, setAttRoll] = useState([])
    const [def, setDef] = useState(2)
    const [defRoll, setDefRoll] = useState([])
    const [rollMessage, setRollMessage] = useState("")
    const [rolling, setRolling] = useState(true)
    const [bunker, setBunker] = useState(false)

    function diceRoll(att, def) {

        let attDice = []
        let defDice = []
        for (let i = 0; i < att; i++) {
            attDice.push(Math.ceil(Math.random() * 6))
        }

        for (let j = 0; j < def; j++) {
            defDice.push(Math.ceil(Math.random() * 6))
        }

        // //___sort results___
        attDice.sort(function (a, b) {
            return b - a;
        })

        defDice.sort(function (a, b) {
            return b - a;
        })

        //____die modifiers____
        //      Scar: bunker: +1 to the defenders high die
        if (bunker) {
            defDice[0] = defDice[0] + 1
        }
        //      Scar: ammoShortage: -1 to the defenders high die
        //      Scar: fortified: +1 to both defenders die, and reduce fortification value if attacked by at least 3 soldiers
        //      Faction: DieMechaniker natural 6's territory cannot be attacked again
        //      Faction: DieMechaniker HQ is always fortified as defender
        //      Faction: Enclave of the Bear, defender subtract 1 from lower die in first territory you attack on your turn
        //      Faction: Enclave of the Bear, natural 3 of a kind and at least 1 enemy then kill all enemies in that territory
        //      Faction: Mutants, when attacking BoNF, you may re-roll 1's until they are no longer 1's
        //      comebackPower: Well-Armed, +1 to all attack die when attacking an HQ
        //      comebackPower: Well-Supplied, When defending, you are unaffected by ammo shortage scars
        //      misslePower: EMP, activate before a combat roll, Dice rolled for combat in that territory can't be modified for the rest of the turn
        //      mutantPower: Unnatural Strength: When attacking, your 6's beat defenders 6's
        //      mutantPower: Unstable Cloning: When defending: if you roll natural doubles, add 1 add'l defending troop to the territory if you still own it after the battle

        //___re-sort if necessary___and compare
        attDice.sort(function (a, b) {
            return b - a;
        })

        defDice.sort(function (a, b) {
            return b - a;
        })

        setAttRoll(attDice)
        setDefRoll(defDice)
        console.log(`Attacker: ${attDice}`)
        console.log(`Defender: ${defDice}`)

        if (defDice.length === 1 || attDice.length === 1) {
            if (defDice[0] >= attDice[0]) {
                console.log("Attacker Loses 1");
                setRollMessage("Attacker Loses 1");
            }
            else {
                console.log("Defender Loses 1");
                setRollMessage("Attacker Loses 1");
            }
        }
        else {
            if ((defDice[0] >= attDice[0]) && (defDice[1] >= attDice[1])) {
                console.log("Attacker Loses 2");
                setRollMessage("Attacker Loses 2");
            }
            else if ((defDice[0] < attDice[0]) && (defDice[1] < attDice[1])) {
                console.log("Defender Loses 2");
                setRollMessage("Defender Loses 2");
            }
            else {
                console.log("Attacker and Defender each lose 1");
                setRollMessage("Attacker and Defender each lose 1");
            }
        }
        return (attDice, defDice)
    }

    return (
        <>
            <Button className='mx-3 bg-white border-0' onClick={toggle}>
                <FontAwesomeIcon className='p-0 fa-2x text-dark' icon={faDiceD6} />
            </Button>
            <Modal isOpen={modal} size='lg' toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <>
                        {/* <Odds /> */}
                        {/* <Row>
                            <Col className="justify-content-center">
                                <Label>Battleground</Label>
                                <Select
                                    className="text-dark"
                                    defaultValue={'Select...'}
                                    onChange={setBattleground}
                                    options={territories}
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
                                        options={territories}
                                    />
                                    :
                                    <Select
                                        disabled
                                        className="text-dark"
                                        defaultValue={'Pick Battleground'}
                                        onChange={setAttackingFrom}
                                        //needs to only display the adjacent territories to the selected battleground (part of the territory object)
                                        options={territories}
                                    />

                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col className="justify-content-center">
                                <Label className='mt-2'>Defender Troop Count</Label>
                                <Input></Input>
                            </Col>
                            <Col className="justify-content-center">
                                <Label className='mt-2'>Attacker Troop Count</Label>
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
                        </Row>*/}
                        <Row className='text-center'>
                            <Col>
                                <Label>Attacker</Label>
                            </Col>
                            <Col>
                                <Label>Defender</Label>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                                {
                                    att <= 1 ?
                                        <Button className='disabled btn-sm'>-</Button>
                                        :
                                        <Button className='btn-sm' onClick={() => setAtt(att - 1)}>-</Button>
                                }
                                <span className='mx-2'>{att}</span>
                                {
                                    att > 2 ?
                                        <Button className='disabled btn-sm'>+</Button>
                                        :
                                        <Button className='btn-sm' onClick={() => setAtt(att + 1)}>+</Button>
                                }
                            </Col>
                            <Col>
                                {
                                    def <= 1 ?
                                        <Button className='disabled btn-sm'>-</Button>
                                        :
                                        <Button className='btn-sm' onClick={() => setDef(def - 1)}>-</Button>
                                }
                                <span className='mx-2'>{def}</span>
                                {
                                    def > 1 ?
                                        <Button className='disabled btn-sm'>+</Button>
                                        :
                                        <Button className='btn-sm' onClick={() => setDef(def + 1)}>+</Button>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col className="text-center">
                                <Scar onClickMethod={() => setBunker(prevBunker => !prevBunker)} icon={faShieldAlt} color={'orange'} />                                
                                    <Scar icon={faBan} color={'red'} />
                                <Scar icon={faChessRook} color={'blue'} />
                                <Scar icon={faFlag} color={'black'} />
                            </Col>
                        </Row>
                        <hr />
                        <Row className='mt-3 text-center'>
                            <Col>
                                <h4>
                                    {
                                        <Die die={attRoll[0]} />
                                    }
                                </h4>
                                <h4>
                                    {
                                        <Die die={attRoll[1]} />
                                    }
                                </h4>
                                <h4>
                                    {
                                        <Die die={attRoll[2]} />
                                    }
                                </h4>
                            </Col>
                            <Col>
                                {
                                    bunker &&
                                    <h3>BUNKER ON</h3>
                                }
                                <h4>
                                    {
                                        <Die die={defRoll[0]} />
                                    }
                                </h4>
                                <h4>
                                    {
                                        <Die die={defRoll[1]} />
                                    }
                                </h4>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <h4 className='text-center'>
                                    {
                                        //bug: message shows from previous die roll results?
                                        rollMessage
                                    }
                                </h4>
                            </Col>
                        </Row>
                    </>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="primary" onClick={() => diceRoll(att, def)}>Roll</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Retreat</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CombatModal
