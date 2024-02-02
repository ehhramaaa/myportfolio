import { Container, Row, Col } from "react-bootstrap"
import { Bullet } from "./NavigationBar"

export const MainHome = () => {
    return (
        <section className="d-flex mainHome mt-4" id="homepage">
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h1 className="name ms-5">Muhamad Ramadhan</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={6} className="d-flex justify-content-center align-items-center flex-column">
                        <div className="slogan">
                            <h2>Hello</h2>
                            <h3>i'm Full Stack</h3>
                            <h4>Website Developer</h4>
                            <p className="text-justify">Second-year Information Systems student at Widyatama University. <br />
                                Possesses elementary skills in HTML, CSS, Javascript, Node.js, PHP, MySQL. <br /> Basic knowledge of Python and ReactJs.
                            </p>
                        </div>
                        <div className="d-flex mt-4 w-100">
                            <div className="sosmed d-flex justify-content-evenly w-50">
                                <i className="fa-brands fa-linkedin-in" />
                                <i className="fa-brands fa-instagram" />
                                <i className="fa-brands fa-twitter" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end align-items-center">
                        <img src="/foto me3.png" alt="" width={"85%"} />
                    </Col>
                </Row>
            </Container>
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <div className="language d-flex justify-content-evenly flex-column position-absolute h-50">
                    <img src="/icon/html-5.png" alt="" width={"50px"} />
                    <img src="/icon/css.png" alt="" width={"50px"} />
                    <img src="/icon/react.png" alt="" width={"50px"} />
                    <img src="/icon/php.png" alt="" width={"50px"} />
                </div>
                < Bullet />
            </div>
        </section>
    )
}
