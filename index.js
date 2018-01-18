var emailid = document.getElementById("emailid");
var user = document.getElementById("user");
var fdback = document.getElementById("fdback");
var subbtn = document.getElementById("subbtn");

function submitClick(){
    
    var firebaseRef = firebase.database().ref();
    
    var Email = emailid.value;
    firebaseRef.child("EMAIL").set(Email);
    
     var User = user.value;
    firebaseRef.child("USER").set(User);
   
    
      var Feed = fdback.value;
    firebaseRef.child("FEEDBACK").set(Feed);
   
    
    
    
};
    
    
    
