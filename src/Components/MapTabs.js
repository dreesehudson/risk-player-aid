import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem, Button, Collapse } from 'reactstrap';
import { worldMap } from '../utilities/territories'
import classnames from 'classnames';

const MapTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => { if (activeTab !== tab) setActiveTab(tab); }
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);

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
                            <ListGroup className='list-group-flush'>
                                {
                                    worldMap.map((item, idx) => {
                                        return (
                                            <>
                                                <Button className='text-dark bg-light border-light'>
                                                    <ListGroupItem key={idx} onClick={toggleCollapse}><h3>{item.continent} <span class="badge text-light rounded-pill bg-secondary ml-3">{item.bonus}</span></h3></ListGroupItem>
                                                </Button>
                                                <Collapse isOpen={isOpen}>
                                                    <ListGroup>
                                                        {
                                                            item.territories.map((i, key) => {
                                                                return (
                                                                    <ListGroupItem key={key}><h5>{i.name}</h5></ListGroupItem>
                                                                )
                                                            })
                                                        }
                                                    </ListGroup>
                                                </Collapse>
                                            </>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">

                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </>
    );
}

export default MapTabs;