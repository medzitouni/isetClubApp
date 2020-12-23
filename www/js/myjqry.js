$(document).ready(function(){
   
      
});

$(document).on("pagecontainerbeforechange",function(ev,ui){
    //pour activer les dom de la page register(page ili aandha il id sigform)
    
    if(ui.toPage[0].id === "sigform"){
        console.log("weeeey");
        $("#Btn_sign").click(function(e) {
            e.preventDefault();
            
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
               
                const AuthRef = auth.createUserWithEmailAndPassword(email, password);
		        AuthRef.catch(e => alert(e.message));

            }
                });
                
            
        
    }else if(ui.toPage[0].id === "logform"){
        console.log("weeeeey");
        $("#Btn_log").click(function(e) {
            e.preventDefault();
            var passwd = $("#password_l").val();
            var emaill = $("#email_l").val();
            const Authl = auth.signInWithEmailAndPassword(emaill, passwd);
            Authl.catch(e => alert(e.message));
            console.log("succes");

        });
        firebase.auth().onAuthStateChanged(firebaseUser =>{
            if(firebaseUser){
                console.log(firebaseUser);
            }else{
                console.log("you not login")
            }
        })

    }else if(ui.toPage[0].id === "contact"){
        console.log("weeeeey");
        $("#Btn_contact").click(function(e) {
            var name = $("#name_c").val();
            var email = $("#email_c").val();
            var message = $("#message").val();
            var userRef = firebase.database().ref();
               
            userRef.push({
                nom: name,
                email_user:email,
                mdp: password
              })
              userRef.reset();
            });
    }
        
            
});

   
