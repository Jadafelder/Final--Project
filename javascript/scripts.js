function contact() {
 let fullname=document.getElementById("fullname").value;
 let email=document.getElementById("email").value;
 let reason=document.getElementById("reason").value;
 let message=document.getElementById("message").value;

 alert("Welcome " + fullname + " , here is the data that you inserted\nEmail: " + email + "\nReason: " + reason + "\nMessage: " + message + "\n\nThank you for your response");
}

function booking() {
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let date=document.getElementById("date").value;
  let time=document.getElementById("time").value;
  let guests=document.getElementById("guests").value;
  let payments = document.querySelector('input[name="payment"]:checked').value;

  alert("Name " + name + " , here is the data that you inserted\nEmail: " + email + "\nDate: " + date + "\nTime " + time + "\nGuests:"  +  guests + "\nPayment Method:"+ payments+"\n\nThank you for your response");
}


$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(2500);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
    
  });


