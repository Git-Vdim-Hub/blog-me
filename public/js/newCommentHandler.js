const addComment = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#input-comment').value;
    const postId = document.querySelector("p").id
    console.log(postId);
    if(comment){
        try{
            const response = await fetch('/api/comments/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    comment,
                    postId
                })
            });
            if(response.ok){
                window.location.href = `/${postId}`;
            }
        }catch (err) {
            console.log(err);
        }
    } else {
        alert("Please provide a comment before submitting");
        return;
    }
}

document.querySelector('#submit-comment').addEventListener('click', addComment);