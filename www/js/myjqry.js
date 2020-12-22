$(document).ready(function(){
   
      
});

$(document).on("pagecontainerbeforechange",function(ev,ui){
    //pour activer les dom de la page register(page ili aandha il id sigform)
    
    if(ui.toPage[0].id === "sigform"){
        console.log("weeeey");
        $("#Btn_sign").click(function(e) {
            e.preventDefault();
            var userRef = firebase.database().ref();
           
            var name = $("#name").val();
            var email = $("#email").val();
            var password = $("#password").val();
            var cpassword = $("#passwordc").val();
            if (name == '' && email == '' && password == '' && cpassword == '') {
               
            alert("Please fill all fields...!!!!!!");
            } else if ((password.length) < 8) {
                
            alert("Password should atleast 8 character in length...!!!!!!");
            } else if (!(password).match(cpassword)) {
            alert("Your passwords don't match. Try again?");
            } else {
                
                alert('Register success')
                console.log("mon Nom :"+name + " "+email+"mon mot de pass "+password);
                userRef.push({
                    nom: name,
                    email_user:email,
                    mdp: password
                  })
                  contactForm.reset();

            }
                });
                
            
        
    }else if(ui.toPage[0].id === "logform"){
        console.log("weeeeey");
        $("#Btn_log").click(function(e) {
            var name = $("#name").val();
            var email = $("#email").val();
        });

    }
});

