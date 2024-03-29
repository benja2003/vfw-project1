//Activity 2
//Visual Frameworks 1212
//Elizabeth Adcock
//November 26, 2012


window.addDateListener("DOMContentLoaded", function(){

	//getElementbyId Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	//Create select field element and populate with options
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "dategroup");
		for( var i=0, j = dateGroup.length; i < j; i++ ) {
			var makeOption = document.createElement("option");
			var optText = dateGroup[i];
			makeOption.setAttribute("value", dateGroup[i]);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms(0).relation
		for(var i=0; i<radio.length; i++){
			if(radios[i].checked){
			 	relationValue = radios[i].value;
			 }
		}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				$('dateform').style.display = "none";
				$('clearlink').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('dateform').style.display = "block";
				$('clearlink').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(){
		var id    = Math.floor(Math.random()*10000001);
		//gather form field values in an object
		//object properties contain array with form label and input values
		var item      	    = {};
			item.ename 		= ["Name: ", $('name').value];
			item.edate		= ["Date: ", $('date').value];
			item.relation	= ["Choice: ", relationvalue];
			item.datetype 	= ["Date Type: ", $('datetype').value];
			item.notes		= ["Notes: ", $('comments').value];
		//Save data into local storage: Use Stringify to convert object to a string
		localstorage.setItem(id, JSON.stringify(item));
		alert("Date Saved");
	}	

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
		};
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "display";
		for(var i=0, len = localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeList);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//covert string from local storage value back to an object 
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for (var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubLi.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
		}
	}
}
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All dates have been deleted!");
			window.location.reload();
			return false;
		}
	}

	//Variable Defaults
	var dateGroup = ["--Choose a Date Type--", "Holiday", "Birthday", "Anniversary", "Other"],
		relationValue
	;

	makeCats();

	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addDateListener("click", getData);
	var clearlink = $('clearlink');
	clearlink.addDateListener("click", clearLocal);
	var save = $('submit');
	save.addDateListener("click", storeData);
}
);