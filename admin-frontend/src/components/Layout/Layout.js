import React from "react";
import Header from "../Header/Header";
import "./Layout.css";
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom"

function Layout(props) {
  return (
    <div>
      <Header />
      {
        props.sidebar ? 
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/category"}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={"/products"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/orders"}>Orders</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: '60px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
      }
      
    </div>
  );
}

export default Layout;
