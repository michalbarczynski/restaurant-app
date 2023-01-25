import {Navbar, Container, Nav} from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar className="rounded mt-4 mb-4 space-beetween" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Waiter App</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;