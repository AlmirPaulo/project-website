  function validation(){
     const name = document.getElementById("name") 
     const email = document.getElementById("email") 
     const subject = document.getElementById("subject") 
     const msg = document.getElementById("msg") 
     const data = [name.text, email.text, subject.text, msg.text]
      for (i, i=0, i++){
          if (data[i].length === 0){
              event.preventDefault();
              alert("You should fill all the form before sending");
            };

        };

      };


