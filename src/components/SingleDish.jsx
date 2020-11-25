import React from "react";
import { Row, Col, Image, Badge, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleDish = (props) => (
  <>
    <Row>
      {props.dish ? (
        <Col md={8} className="ml-auto mr-auto">
          <Row>
            <Col md={4}>
              <Link to={"/details/" + props.dish.id}>
                <Image src={props.dish.image} className="my-2 w-100 h-auto" />
              </Link>
            </Col>
            <Col md={8} className="mt-auto mb-auto">
              <h4>
                {props.dish.name}
                <Badge variant="warning" className="ml-2">
                  {props.dish.price}
                </Badge>
                <Badge variant="danger">{props.dish.label}</Badge>
              </h4>
              {props.dish.description}
            </Col>
          </Row>
        </Col>
      ) : (
        <Alert variant="danger" className="mt-5 ">
          No dish selected, please select a dish.
        </Alert>
      )}
    </Row>
  </>
);

export default SingleDish;