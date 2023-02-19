const updatePost = async (event) => {
    event.preventDefault();
    console.log("Updated");

}
const deletePost = async (event) => {
    event.preventDefault();
    console.log("Deleted");

}

document.querySelector('#update-post').addEventListener('click', updatePost);

document.querySelector('#delete-post').addEventListener('click', deletePost);
