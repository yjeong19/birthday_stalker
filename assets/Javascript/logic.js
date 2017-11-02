// firebase start
var database = firebase.database();
var info = {
  firstName: $("#fname").val(),
  lastName: $("#lname").val(),
  dob: $("#datepicker").val()
}


$("#submitBtn").on("click", function(){

  database.ref("/User").push(
    info = {
      firstName: $("#fname").val(),
      lastName: $("#lname").val(),
      dob: $("#datepicker").val()

  })


});

//firebase end

database.ref().child("/User").once("value", function(snapshot) {
  var userData = snapshot.val();
  console.log(userData);
  var keys = Object.keys(userData);
  console.log(keys);

  for (var i = 0; i < keys.length; i++){
    var k = keys[i];
    var first = userData[k].firstName;
    var last = userData[k].lastName;
    var bday = userData[k].dob;

    console.log(first,last,bday);
  }

});




  $( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );
