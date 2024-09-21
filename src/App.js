import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './paginas/main';
import { Avatar } from '@mui/material';
import OIG4 from './images/OIG4.jpeg'

export default function App() {
  return (
    <div>
      <>
        <Navbar key={false} expand={false} style={{background: 'pink'}} >
          <Container fluid>
            <div style={{ display: 'flex', alignItems: 'start' }}>
              <Avatar alt="Itsuki" src={OIG4} sx={{ width: 44, height: 44 }} />
              <Navbar.Brand href="/" style={{ marginLeft: '10px' }}>Itsuki</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Itsuki
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/surpresa">surpresa!!</Nav.Link>
                  <Nav.Link href="/provaJulio">prova Julio</Nav.Link>
                  <Nav.Link href="/login">SEAR</Nav.Link>
                  <Nav.Link href="/pontoDigital">ponto digital</Nav.Link>
                  <Nav.Link href="/provaLuciene">Prova Luciene</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Container>
          <Rotas /> {/* Renderizando as rotas */}
        </Container>

    </>
    </div>
  );
}