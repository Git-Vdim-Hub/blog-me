//handles posting a post to the database

const addPost = async (event) =>{
    event.preventDefault();
    const postTitle = document.querySelector('#input-title').value;
    const postContent = document.querySelector('#input-body').value;
    if(postTitle && postContent){
        try{
            const response = await fetch('/api/posts/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    postTitle,
                    postContent
                })
            })
            if(response.ok) {
                window.location.href = '/dashboard'
            }
        } catch (err){
            console.log(err);
        }
    } else{
        alert("Please provide a title and post content");
        return;
    }
}

document.querySelector('#new-post').addEventListener('click', addPost);