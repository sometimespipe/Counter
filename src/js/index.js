//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="container mx-auto">
			<div className="clock">
				<i className="far fa-clock "></i>
			</div>
			<div className="four">{props.fourNum % 10}</div>
			<div className="three">{props.threeNum % 10}</div>
			<div className="two">{props.twoNum % 10}</div>
			<div className="one">{props.oneNum % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	oneNum: PropTypes.number,
	twoNum: PropTypes.number,
	threeNum: PropTypes.number,
	fourNum: PropTypes.number
};

//render your react application
let counter = 0;
setInterval(function() {
	const fourVal = Math.floor(counter / 1000);
	const threeVal = Math.floor(counter / 100);
	const twoVal = Math.floor(counter / 10);
	const oneVal = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<SecondsCounter
			oneNum={oneVal}
			twoNum={twoVal}
			threeNum={threeVal}
			fourNum={fourVal}
		/>,
		document.querySelector("#app")
	);
}, 1000);
