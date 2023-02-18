

const addPost = async (event) =>{
    event.preventDefault();
    const postTitle = document.querySelector('#input-title').value;
    const postContent = document.querySelector('#input-body').value;
    //console.log(postTitle);
    //console.log(postContent);
    if(postTitle && postContent){
        //console.log("PIKA PIKA");
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