import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
export const Counter = (props) => {
	return (
		<div className="bg-dark p-5 text-light fw-bold d-flex justify-content-center fs-4">
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light text center">
					<i className="fa-solid fa-clock"></i>
				</p>
			</div>
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light">{props.numberFive % 10}</p>
			</div>
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light">{props.numberFour % 10}</p>
			</div>
			<div className="align-content-center col-3 fs-1" id="Clock">
				<p className="text-light">{props.numberThree % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberTwo % 10}</p>
			</div>
			<div className="justify-content-center col-2 fs-1">
				<p className="text-light">{props.numberOne % 10}</p>
			</div>
		</div>
	);
};

Counter.propTypes = {
	One: PropTypes.number,
	Two: PropTypes.number,
	Three: PropTypes.number,
	Four: PropTypes.number,
	Five: PropTypes.number,
};

//create your first component
