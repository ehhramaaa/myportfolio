import { Container, Card, Row, Col } from "react-bootstrap"

export const MainContact = () => {
    return (
        <>
            <section id="contact">
                <Container className="d-flex justify-content-center align-items-center flex-column mt-2">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <h1>
                            Have a project ?
                        </h1>
                        <p className="text-center">I would love to hear about your project! <br /> Please contact us to discuss your ideas further.</p>
                    </div>
                    <Card className="bg-info w-100">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Row>
                            <Col xs={5} className=" bg-warning">
                                <div className="d-flex justify-content-center p-4 flex-column">
                                    <h4>Contact Information</h4>
                                    <p>Contact me for more information or questions. <br /> I'm ready to respond to you!</p>
                                    <p>081317398575</p>
                                    <p>ehhramaa212@gmail.com</p>
                                    <p>Bandung</p>
                                </div>
                            </Col>
                            <Col xs={7}>
                                <div className="d-flex p-4">
                                    <form action="" className="w-100 d-flex justify-content-center flex-column">
                                        <Row>
                                            <Col className="input-box">
                                                <input type="text" className="input-field" id="fullname"/>
                                                <label htmlFor="fullname" className="label">Fullname</label>
                                            </Col>
                                            <Col className="d-flex justify-content-center" >
                                                <input type="text" />
                                            </Col>
                                        </Row>
                                        <input type="text" />
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
        </>
    )
}
