import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Cardinfo = (props) => {
	return (
		<>
		<Card className="text-center">
			<Card style={{ width: "19rem" }}>
				<Card.Img variant="top" src={props.imageUrl} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					</Card.Body>
					<Card.Footer>
					<Button variant="primary justify-content: center">{props.buttonLabel}</Button>
					</Card.Footer>
				</Card>
			</Card>
		</>
	);
};

export default Cardinfo;