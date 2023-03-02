import {Navbar, Container, Nav} from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar className="rounded mt-4 mb-4y" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Waiter App</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/newtable">Add Table</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;