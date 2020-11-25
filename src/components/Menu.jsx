import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes && dishes.length >= 0 ? dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />) :  <h2>Work in Progress</h2> }
  </Container>
);
export default Menu;
