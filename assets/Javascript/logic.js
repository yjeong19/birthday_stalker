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




  $( function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );
