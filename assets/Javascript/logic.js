// firebase start
var database = firebase.database();
var info = {
  firstName: $("#fname").val(),
  lastName: $("#lname").val(),
  dob: $("#datepicker").val()
}
var k;
var first;
var last;
var bday;


//firebase end

$('.fc-next-button').on('click', function(){
  alert('work');
})

$("#submitBtn").on("click", function(){

  database.ref("/User").push(
    info = {
      firstName: $("#fname").val(),
      lastName: $("#lname").val(),
      dob: $("#datepicker").val()
  })
});

database.ref().child("/User").once("value", function(snapshot) {
  var userData = snapshot.val();
  // console.log(userData);
  var keys = Object.keys(userData);
  // console.log(keys);

  for (var i = 0; i < keys.length; i++){
    k = keys[i];
    first = userData[k].firstName;
    last = userData[k].lastName;
    bday = userData[k].dob;

    $('.fc-day').each(function() {
      var date = $(this).data('date');
      $(this).val(date);
      //the last was a test --- need to figure out how to make date input yyyy-mm-dd
      if("2017-"+bday === date){
      $(this).text("It is " + first + "'s birthday! Click to send message");
  } else if('2018-'+bday === date){
      $(this).text("It is " + first + "'s birthday! Click to send message");
  }
})
}
});
//firebase end




//makes date only mm-dd for formatting
$('#datepicker').on('click', function(){

jQuery(function($){
   $("#datepicker").mask("99-99",{placeholder:"mm-dd"});
 })
});
