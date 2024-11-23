import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">ACCUIEL</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">A PROPOS</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"> SERVICE</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"> PROJET</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">CONTACT</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Navbar;