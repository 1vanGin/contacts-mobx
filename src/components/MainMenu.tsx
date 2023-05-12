import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <h1>Книга контактов</h1>
        </NavLink>

        <Nav className="me-auto">
          <NavLink className="nav-link" to="/groups">
            Группы
          </NavLink>
          <NavLink className="nav-link" to="/favorite">
            Избранное
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
