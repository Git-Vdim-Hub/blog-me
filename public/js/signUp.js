const signUpFormHandler = async (event) => {
    event.preventDefault();
    const userName = document.querySelector('#user-input').value;
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;
    if(userName && email && password){
        try{
            const signUp = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: userName,
                    email: email,
                    password: password
                })
            });
            if(signUp.ok) {
                window.location.href = '/login';
            }
        } catch(err){
            console.log(err);
        }
    } else{
        alert("Please provide a username, valid e-mail and password");
        return;
    }

}

document.querySelector('#sign-up-button').addEventListener('click', signUpFormHandler);