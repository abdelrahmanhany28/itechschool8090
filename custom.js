function checkPassword()
       {
          var password = document.getElementById('password').value;
          var confirm  = document.getElementById('confirm').value ;

          if(password != confirm){
             document.getElementById('passError').innerHTML = 'Password and confirm password dose not match.';
          }
          else{
            document.getElementById('passError').innerHTML = '';
          } 
       }