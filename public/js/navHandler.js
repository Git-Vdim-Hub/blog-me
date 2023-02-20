const logOut = async (event) => {
    event.preventDefault();
    console.log("PIKACHU");
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

document.querySelector('#logout-button').addEventListener('click', logOut);