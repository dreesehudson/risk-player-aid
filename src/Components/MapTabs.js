import React, { useState, useContext } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem, Collapse, Card, CardHeader, Badge } from 'reactstrap';
import classnames from 'classnames';
import CombatRoll from './CombatRoll';
import AmmoShortage from './AmmoShortage';
import HQ from './HQ';
import Bunker from './Bunker';
import Mercenary from './Mercenary';
import BioHazard from './BioHazard';
import DataContext from '../utilities/DataContext';

const MapTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => { if (activeTab !== tab) setActiveTab(tab); }
    const [toggleCollapse, setToggleCollapse] = useState(-1);
    const { regions, setRegions } = useContext(DataContext)
    

    function toggleAccordian(id) {
        if (toggleCollapse == id) {
            setToggleCollapse(-1)
        }
        else {
            setToggleCollapse(id)
        }
    }


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
                                regions.map((region, idx) => {
                                    return (
                                        <>
                                            <Card key={idx}>
                                                <CardHeader onClick={() => toggleAccordian(idx)}>
                                                    <h5>{region.continent} <Badge className="text-light rounded-pill bg-secondary ml-3">{region.bonus}</Badge></h5>
                                                </CardHeader>
                                                <Collapse isOpen={toggleCollapse === idx ? true : false}>
                                                    <ListGroup>
                                                        {
                                                            region.territories.map((i, key) => {
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