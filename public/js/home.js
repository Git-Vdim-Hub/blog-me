let postInputEl = document.querySelector('#comment-box');
let submitButtonEl =document.querySelector('#submit-button');

const submitPostHandler = async (event) => {
    event.preventDeault();
    let postInput = postInputEl.value.trim();
    if(postInput){
        try{
            const post = await fetch('/post')
        } catch (err) {

        }
    }
}