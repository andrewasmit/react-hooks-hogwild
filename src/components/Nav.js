import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ greaseFilter, searchName, searchHandler, submitHandler, resetForm, weightFilter, setWeightFilter }) => {


	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<form onSubmit={submitHandler}>
				<label>Search By Hog Name: </label>
				<input 
					type="text" 
					value={searchName}
					onChange={searchHandler} 
				></input>
				<button type="submit">Search</button>
			</form>
			<button onClick={greaseFilter}>Show Greased Hogs</button>
			<select value={weightFilter} onChange={setWeightFilter}>
				<option disabled >--Sort By Weight--</option>
				<option>Less than 1</option>
				<option>1-2</option>
				<option>2-4</option>
				<option>5+</option>
			</select>
			<button onClick={resetForm}>Reset</button>
		</div>
	);
};

export default Nav;
