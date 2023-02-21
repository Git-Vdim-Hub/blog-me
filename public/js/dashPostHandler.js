//This .js file handles the front end side of the dash page after a user logs in

//handles the process of updating a previously created post.
const updatePost = async (event) => {
    event.preventDefault();
    //console.log("Updated");
    postId = document.querySelector('#update-post').parentElement.id;
    postTitle = document.querySelector('#input-title').value;
    postContent = document.querySelector('#input-content').value;
    console.log(postTitle);
    console.log(postContent);
    if(postTitle && postContent){
        try{
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    post_title: postTitle,
                    post_text: postContent
                })
            })
            if(response.ok){
                window.location.href = '/dashboard'
            }
        } catch(err){
            console.log(err);
        }
    } else{
        alert("Unable to update with empty fields, if you want to delete, please do so");
        window.location.href = `/dashboard/${postId}`;
        return;
    }

}

//handles the process of deleting a post with the delete button
const deletePost = async (event) => {
    event.preventDefault();
    postId = document.querySelector('#delete-post').parentElement.id;
    //console.log(postId);
    try{
        const response = await fetch(`/api/posts/${postId}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            window.location.href = '/dashboard';
        }
    } catch (err){
        console.log(err);
    }

}
//update ad delete buttons
document.querySelector('#update-post').addEventListener('click', updatePost);

document.querySelector('#delete-post').addEventListener('click', deletePost);
