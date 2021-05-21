import React from "react";

const Emit = () => {
	return (
		<div>
			<h5>Emit</h5>
			<br />
			<p>Event Name</p>
			<input />
			<br />
			<br />
			<p>data</p>
			<textarea>{`{
  "data": "sample data"
}`}
			</textarea>
			<br />
			<br />
			<button>Send Emit</button>
		</div>
	);
};

Emit.propTypes = {};

export default Emit;
