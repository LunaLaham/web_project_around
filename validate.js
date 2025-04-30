



  function toggleButton()
            {
                const username = document.getElementById('name').value;
                const password = document.getElementById('profesion').value;
                if (username && password) {
                    document.getElementsByClassName("submitButtonSelector") .disabled = false;
                } else {
                    document.getElementById("submitButtonSelector").disabled = true; //que onda
                }
            }
            
