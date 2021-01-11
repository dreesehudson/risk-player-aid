import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faDice } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, CardTitle, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Container } from 'reactstrap';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import RedStarTracker from './RedStarTracker'
import Recruitment from './Recruitment'
import { worldMap } from '../utilities/territories'
import Select from "react-select";
import MapTabs from './MapTabs';
import Odds from './Odds';

const Body = (props) => {
    const [battleground, setBattleground] = useState('');
    const [attackingFrom, setAttackingFrom] = useState('');
    const [modal, setModal] = useState(false);
    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */ }
    const [players, setPlayers] = useState([{ id: 1, name: "Player 1" }, { id: 2, name: "Player 2" }, { id: 3, name: 'Player 3' }]);
    const { className } = props;
    const toggle = () => setModal(!modal);



    //map through each continent within the territories JSON
    //return array of territories objects

    return (
        <Container className='mt-3'>
            <Card>
                <Row className="my-3 justify-content-center">
                    {/* players will need to be moved to a useContext helper that is populated from Austin's new game modal */}
                    {players.map((item, idx) => {
                        return (
                            <Col key={idx} className='my-2'>
                                <RedStarTracker player={item} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </Card>
            <Row className="mt-3">
                <Col sm="6">
                    {/* Territory Pane */}
                    <Card body>
                        <CardTitle tag="h5">Territories</CardTitle>
                        <MapTabs
                            players={players}
                        />
                    </Card>
                </Col>
                <Col sm="6">
                    <Row>
                        <Col>
                            <Recruitment
                                players={players}
                            />
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container >
    );
};

export default Body;