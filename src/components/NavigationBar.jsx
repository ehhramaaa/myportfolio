import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <Navbar role="nav" expand="lg" className="bg-body-transparent">
                {/* <i className="fa-thin fa-bars-sort ms-4 position-absolute" style={{ fontSize:"1.5rem" }} /> */}
                <Link className="logo position-absolute mt-2" to={"/"}>
                </Link>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center align-item-center mt-3" id="basic-navbar-nav">
                        <Nav className="justify-content-evenly w-50">
                            {/* <Link to="/">Home</Link> */}
                            <Link to={"/"} className="nav-link">Home</Link>
                            {/* <Link to={"/about"} className="nav-link">About</Link> */}
                            <Link to={"/portfolio"} className="nav-link">Portfolio</Link>
                            <Link to={"/contact"} className="nav-link">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export const Bullet = () => {
    return (
        <>
            <i className="fa-thin fa-ellipsis-stroke-vertical" style={{ fontSize: "3rem", height: "1rem" }} />
            <i className="fa-thin fa-ellipsis-stroke-vertical" style={{ fontSize: "3rem", height: "1rem" }} />
            <i className="fa-thin fa-ellipsis-stroke-vertical" style={{ fontSize: "3rem", height: "1rem" }} />
        </>
    )
}