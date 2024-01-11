import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavbar() {
    return (
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container className='justify-content-center'>
                    <Navbar.Brand className="fs-2">KANG'S PORTFOLIO</Navbar.Brand>
                </Container>
            </Navbar>
    );
}

export default CustomNavbar;