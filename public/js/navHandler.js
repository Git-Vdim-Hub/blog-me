const logInButtonEl = document.querySelector('#login-dash');
const logOutButtonEl = document.querySelector('#logout-button'); 

const logOut = async (event) => {
    event.preventDefault();
    try{
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            window.location.href = '/logIn'
        } else{
            alert("Unable to log out");
            return;
        }
    } catch (err) {
        console.log(err);
    }
}

const statusCheck = async () => {
    try{
        const response = await fetch('/api/users/status', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        const isLoggedIn = await response.json();
        if(isLoggedIn){
            logInButtonEl.setAttribute('class', 'visually-hidden');
        } else{
            logOutButtonEl.setAttribute('class', 'visually-hidden');
        }
    } catch (err){
        console.log(err);
    }
}

document.querySelector('#logout-button').addEventListener('click', logOut);

statusCheck();