const updatePost = async (event) => {
    event.preventDefault();
    console.log("Updated");

}
const deletePost = async (event) => {
    event.preventDefault();
    postId = document.querySelector('#delete-post').parentElement.id;
    console.log(postId);
    try{
        const response = await fetch(`/api/posts/${postId}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        //if(response.ok){
            window.location.href = '/dashboard';
       // }
    } catch (err){
        console.log(err);
    }

}

document.querySelector('#update-post').addEventListener('click', updatePost);

document.querySelector('#delete-post').addEventListener('click', deletePost);
