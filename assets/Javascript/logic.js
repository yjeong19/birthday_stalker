// firebase start
var database = firebase.database();
var info = {
  name: $("#name").val(),
  email: $("#email").val(),
  dob: $("#date").val(),
  check: false
}


//makes date only mm-dd for formatting
jQuery(function($){
   $("#date").mask("99-99",{placeholder:"mm-dd"});
 });


$( document ).ready(function() {
        $('#calendar').fullCalendar({
});
});


$('.fc-prev-button').click(function(){
   alert('prev is clicked, do something');
});

$('.fc-button-next').click(function(){
   alert('nextis clicked, do something');
});

$("#submitBtn").on("click", function() {
  database.ref("/User").push(
    info = {
      name: $("#name").val(),
      email: $("#email").val(),
      dob: $("#date").val(),
      // check: false
    })
});
//
database.ref().child("/User").once("value", function(snapshot) {
  var userData = snapshot.val();
  // console.log(userData);
  var keys = Object.keys(userData);
  // console.log(keys);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = userData[k].name;
    var email = userData[k].email;
    var bday = userData[k].dob;
    var subject = 'Happy Birthday ' + name + '!';
    var emailBody = 'Happy Birthday! ' + name + ' wish you the very best!';


    $('.fc-day').each(function() {
      date = $(this).data('date');
      $(this).val(date);
      //the last was a test --- need to figure out how to make date input yyyy-mm-dd
      if ("2017-" + bday === date) {
        $(this).text("It is " + name + "'s birthday! Click to send message");
        console.log(bday);
        // $(this).wrap("<a href="mailto:"/>");
        $(this).wrap(
       $("<a>").attr("href", "mailto:" + email + '?subject=' + subject + '&body=' + emailBody)
        );
      } else if ('2018-' + bday === date) {
        $(this).text("It is " + name + "'s birthday! Click to send message");
        $(this).wrap('<a href="alert.html"/> target="_blank" id="test"/>');
        $(this).wrap(
       $("<a>").attr("href", "mailto:" + email + '?subject=' + subject + '&body=' + emailBody)
        );
      }
    })
  }
})

//firebase end

// alert email
// $(function() {
//   $('#emailLink').on('click', function(event) {
//     database.ref().child('/User').once("value", function(snapshot) {
//       var userData = snapshot.val();
//       // console.log(userData);
//       var keys = Object.keys(userData);
//       // console.log(keys);
//
//       for (var i = 0; i < keys.length; i++) {
//         k = keys[i];
//         first = userData[k].firstName;
//         last = userData[k].lastName;
//         bday = userData[k].dob;
//
//
//           // var email = last;
//           var subject = 'happy birthday';
//           var emailBody = 'Some blah';
//           window.location = 'mailto:' + last + '?subject=' + subject + '&body=' + emailBody;
//       }
//     })
//   })
// })
