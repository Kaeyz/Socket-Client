import React from "react";
import Style from "./playground.style";
import Emit from "../emit";
import Listen from "../listen";

const Playground = () => {
	return (
		<Style>
			<div className="top_section">
				<input />
				<button>Connect</button>
			</div>
			<div className="playground_body">
				<Listen />
				<Emit />
			</div>
		</Style>
	);
};

export default Playground;