

<Col>
    <Card body>
        {/* Combat Modal */}
        <CardTitle tag="h5">Combat Roll</CardTitle>
        <>
            <Button className='mx-auto my-1 p-2' onClick={toggle}>
                <FontAwesomeIcon className='mx-2 p-0 fa-3x text-light' icon={faDice} />
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
                                {
                                    battleground.bunker ?
                                        <FontAwesomeIcon className='m-2 mt-3 fa-3x' color={'#F18F01'} icon={faFortAwesomeAlt} />
                                        :
                                        <FontAwesomeIcon className='m-2 mt-3 fa-3x' icon={faFortAwesomeAlt} />
                                }
                                {
                                    battleground.ammoShortage ?
                                        <FontAwesomeIcon className='m-2 mt-3 fa-3x' color={'red'} icon={faBan} />
                                        :
                                        <FontAwesomeIcon className='m-2 mt-3 fa-3x' icon={faBan} />
                                }
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
    </Card>
</Col>