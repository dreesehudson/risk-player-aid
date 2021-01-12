import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem, Button, Collapse, Card, CardHeader, CardBody, Badge } from 'reactstrap';
import { worldMap } from '../utilities/territories'
import classnames from 'classnames';
import CombatRoll from './CombatRoll';
import AmmoShortage from './AmmoShortage';
import HQ from './HQ';
import Bunker from './Bunker';
import Mercenary from './Mercenary';
import BioHazard from './BioHazard';

const MapTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => { if (activeTab !== tab) setActiveTab(tab); }
    const [isOpen, setIsOpen] = useState(false);
    const [toggleCollapse, setToggleCollapse] = useState();

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Group by Continent</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Group by Player</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            {
                                worldMap.map((item, idx) => {
                                    return (
                                        <>
                                            <Card key={idx}>
                                                <CardHeader onClick={() => setToggleCollapse(idx)}>
                                                    <h5>{item.continent} <Badge className="text-light rounded-pill bg-secondary ml-3">{item.bonus}</Badge></h5>
                                                </CardHeader>
                                                <Collapse isOpen={toggleCollapse === idx ? true : false}>
                                                    <ListGroup>
                                                        {
                                                            item.territories.map((i, key) => {
                                                                return (
                                                                    <ListGroupItem key={key}>
                                                                        <h5>
                                                                            {i.name}
                                                                            <HQ hq={i.hq} />
                                                                            <Bunker bunker={i.bunker} />
                                                                            <AmmoShortage ammoShortage={i.ammoShortage} />
                                                                            <Mercenary mercenary={i.mercenary} />
                                                                            <BioHazard bioHazard={i.bioHazard} />
                                                                            <CombatRoll />
                                                                        </h5>
                                                                    </ListGroupItem>
                                                                )
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Collapse>
                                            </Card>
                                        </>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            {
                                props.players.map((player, idx) => {
                                    return (
                                        <>
                                            <Card key={idx}>
                                                <CardHeader onClick={() => setToggleCollapse(idx)}>
                                                    <h5>{player.name}</h5>
                                                </CardHeader>
                                                <Collapse isOpen={toggleCollapse === idx ? true : false}>
                                                    <ListGroup>
                                                    </ListGroup>
                                                </Collapse>
                                            </Card>
                                        </>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </>
    );
}

export default MapTabs;