import React, {useState} from "react";
import Nav from "./Nav";
import CardBox from"./CardBox"
import hogs from "../porkers_data";

console.log("Here is the data: ", hogs);

function App() {
	const [filteredData, setFilteredData] = useState(hogs);
	const [greaseFilter, setGreaseFilter] = useState(false);
	const [searchName, setSearchName] = useState("")
	const [weightFilter, setWeightFilter] = useState("--Sort By Weight--");


	const greasedHogs = filteredData.filter(hog=>hog.greased===true);

	function greaseFilterClick(e){
		if (greaseFilter === false){
			setFilteredData(greasedHogs);
			setGreaseFilter(!greaseFilter)
			e.target.innerText = "Show All Hogs"
		} if (greaseFilter === true){
			setFilteredData(hogs)
			setGreaseFilter(!greaseFilter)
			e.target.innerText = "Show Greased Hogs"
	}
}

	function searchHandler(e){
		setSearchName(e.target.value)
	}

	function submitHandler(e){
		e.preventDefault()
		const newData = hogs.filter(hog=>hog.name.toLowerCase().includes(searchName.toLowerCase()))
		setFilteredData(newData);
		setSearchName("")
	}

	function resetForm(){
		setFilteredData(hogs)
		setWeightFilter("--Sort By Weight--")
	}

	function weightFilterHandler(e){
		setWeightFilter(e.target.value);
		// if (weightFilter === "Less than 1"){
		// 	console.log("HELLO")
		// } if (weightFilter === "1-2"){
		// 	console.log("ONE to TWO")
		// } if (weightFilter === "2-4"){
		// 	console.log("TWO TO FOUR")
		// }if (weightFilter==="5+"){
		// console.log("FIVE PLUS")
		// }
	}

	
	return (
		<div className="App">
			<Nav 
				greaseFilter={greaseFilterClick}
				searchName={searchName} 
				submitHandler={submitHandler}
				searchHandler={searchHandler} 
				resetForm={resetForm}
				setWeightFilter={weightFilterHandler}
				weightFilter={weightFilter}
			/>
			<CardBox props={ filteredData }/>
		</div>
	);
}

export default App;
