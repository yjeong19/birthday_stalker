// firebase start
var database = firebase.database();
var info = {
  name: $("#name").val(),
  email: $("#email").val(),
  dob: $("#date").val(),
}


//makes date only mm-dd for formatting
jQuery(function($){
   $("#date").mask("99-99",{placeholder:"mm-dd"});
 });


$( document ).ready(function() {
        $('#calendar').fullCalendar({

        });
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

      if ("2017-" + bday === date) {
        $(this).text("It is " + name + "'s birthday! Click to send message");
        $(this).wrap(
       $("<a class='calendarText'>").attr("href", "mailto:" + email + '?subject=' + subject + '&body=' + emailBody)
        );
      } else if ('2018-' + bday === date) {
        $(this).text("It is " + name + "'s birthday! Click to send message");
        $(this).wrap('<a href="alert.html"/> target="_blank" id="test"/>');
        $(this).wrap(
       $("<a class='calendarText>").attr("href", "mailto:" + email + '?subject=' + subject + '&body=' + emailBody)
        );
      }
    })
  }
})

//firebase end

// alert email
$(function() {
  $('#emailLink').on('click', function(event) {

          // var email = last;
          var subject = 'happy birthday';
          var emailBody = 'Some blah';
          window.location = 'mailto:' + "someone@someone.com" + '?subject=' + subject + '&body=' + emailBody;
      })
  })
