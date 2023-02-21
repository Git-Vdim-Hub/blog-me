//handles the call to start a user session

const loginFormHandler = async (event) => {
    event.preventDefault();
    userInput = document.querySelector('#user-input').value;
    console.log(userInput);
    passInput = document.querySelector('#password-input').value;
    console.log(passInput);
    if(userInput && passInput){
        try{
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userInput, passInput})
            });
            if(response.ok){
                document.location.replace('/dashboard');
            }
        }catch (err) {
            console.log(err);
        }
    } else{
        alert("You cannot leave fields blank");
    }
}

document.querySelector('#login-button').addEventListener('click', loginFormHandler);