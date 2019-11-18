//Function when the Load data button is clicked 
	$(document).ready(function(){
		$("#loadingData").click(function(){
		//container to display the data and emptying the div container after every load
		$("#displayingData").empty();
		$.getJSON("/users", function(result){
		  $.each(result, function(i, field){
			  var dateTime =new Date($.now());
			  //for loop to  iterate through the JSON data with the delete button appended
				for(var j=0;j<field.length;j++)
				{
					$("#displayingData").append(dateTime.getHours() + " : " + 
					dateTime.getMinutes()+ " - " + field[j].fullName + " , " + field[j].major + 
					" ,  " + field[j].startYear + "<button value='" +field[j].id+ "' id ='deleteData'>Delete</button>" +"<br>" );
				console.log(field[j].id);
				}
		  	  });
			});
		});
	});
	//funtion to add record using the add record button
	$(document).ready(function(){
		$("#addingRecord").click(function(){
	//condition to check the data condition
		const startYear= document.getElementById('startYear').value;
		if (startYear <= 2000) 
		{
			window.alert('Incorrect year: ' + startYear)
		return
		}
		//Ajax to serve the POST requests
		$.ajax({
				method: 'POST',
				url: '/users/',
				type: 'POST',
				cache: false,
				data: 
				//fetching the input values
				{
					fullName:$('#fullName').val(),
					major:$('#major').val(),
					startYear: $('#startYear').val(),
				}
			})
			alert("Added the record, Hit Load Button to see the changes");
			});
			}); 
		function refreshLoad()
			{
			document.getElementById("displayingData").innerHTML=" ";
			$.getJSON("/users", function(result){
			$.each(result, function(i, field){
				var dateTime =new Date($.now());
				//appending the output using array.
				for(var j=0;j<field.length;j++)
			{
				$("#displayingData").append(dateTime.getHours() + " : " + 
					dateTime.getMinutes()+ " - "+field[j].fullName + " , " + field[j].major + " ,  " + field[j].startYear + "<button value='" +field[j].id+ "' id ='deleteData'>Delete</button>" +"<br>" );
				console.log(field[j].id);
			}
		 });
		});
		}
		// function to delete data 
	$(document).on("click","#deleteData",function(){
		const id= $(this).val();	
		console.log(id);
		$.ajax({
			//Ajax to delete the data using delete request
				method: 'DELETE',
				url: '/user/'+id,
				type: '',
				cache: false,
				}
				)
			alert("Deleted the record");
			refreshLoad();
			});
			//reloading the data when the delete button is pressed
	
			   
/*document.addEventListener('DOMContentLoaded', assignClickHandler)

function assignClickHandler () {
  document.getElementById('addRec').addEventListener('click', function () {
    const startYear = document.getElementById('startYear').value
    if (startYear < 2000) {
      window.alert('Incorrect year: ' + startYear)
      return
    }
    const fullName = document.getElementById('fullName').value
    const major = document.getElementById('major').value

    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = hours + ':' + minutes

    const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear

    const enteredRecords = document.getElementById('enteredRecords')
    let newChild = document.createElement('li')
    newChild.appendChild(document.createTextNode(newEntry))

    enteredRecords.appendChild(newChild)

    document.getElementById('inputs').reset()
  })
}

// setup some JSON to use
var cars = [
  {
    "id":1,
    "name":"Rick",
    "email":"rick@gmail.com"
  },
  {
    "id":2,
    "name":"Glenn",
    "email":"glenn@gmail.com"
  },
  {
    "id":3,
    "name":"Negan",
    "email":"negan@gmail.com"
  }
];

window.onload = function() {
	// setup the button click
	document.getElementById("addRec").onclick = function() {
		doWork()
	};
}

function doWork() {
	// ajax the JSON to the server
	$.post("receiver", cars, function(){

	});
	// stop link reloading the page
 event.preventDefault();
}
*/

