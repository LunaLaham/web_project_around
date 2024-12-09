



  function toggleButton()
            {
                var username = document.getElementById('name').value;
                var password = document.getElementById('profesion').value;
                if (username && password) {
                    document.getElementsByClassName("submitButtonSelector") .disabled = false;
                } else {
                    document.getElementById("submitButtonSelector").disabled = true;
                }
            }
            
