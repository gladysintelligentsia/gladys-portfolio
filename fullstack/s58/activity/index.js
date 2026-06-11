// axios.get() - used to request data from a server
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    showPosts(response.data);
})

// Show Posts Function
const showPosts = (posts) => {
    let postEntries = ''; // Defined locally to prevent duplicate appending

    posts.forEach((post) => {
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });
    document.querySelector('#div-post-entries').innerHTML = postEntries;
}

// Add Posts Logic
document.querySelector('#form-add-post').addEventListener('submit', (event) => {
    event.preventDefault();
    let titleInput = document.querySelector('#txt-title');
    let bodyInput = document.querySelector('#txt-body');

    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        },
        headers: { 'Content-type': 'application/json' }
    })
    .then((response) => {
        console.log(response.data);
        alert('Successfully added.');
        titleInput.value = null;
        bodyInput.value = null;
    });
});

// Edit Post (Populate Form Fields)
const editPost = (id) => {
    let title = document.querySelector(`#post-title-${id}`).innerHTML;
    let body = document.querySelector(`#post-body-${id}`).innerHTML;

    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = title;
    document.querySelector('#txt-edit-body').value = body;

    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// 1. Handle Form Submissions for Editing Posts
document.querySelector('#form-edit-post').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const id = document.querySelector('#txt-edit-id').value;
    const titleInput = document.querySelector('#txt-edit-title');
    const bodyInput = document.querySelector('#txt-edit-body');
    const submitBtn = document.querySelector('#btn-submit-update');

    axios({
        method: 'put',
        url: 'https://jsonplaceholder.typicode.com/posts/1', 
        data: {
            id: id,
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        },
        headers: { 'Content-type': 'application/json' }
    })
    .then((response) => {
        console.log(response.data); 
        alert("Succesfully updated."); // Note the specific spelling "Succesfully"
        
        titleInput.value = '';
        bodyInput.value = '';
        document.querySelector('#txt-edit-id').value = '';
        submitBtn.disabled = true; 
    });
});

// 2. Delete Post Method
const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response); 
        alert("Successfully deleted."); 
        
        const postElement = document.querySelector(`#post-${id}`);
        if (postElement) {
            postElement.remove();
        }
    });
};

// 3. Delete All Button Logic
document.querySelector('#delete-all').addEventListener('click', () => {
    alert("All Posts Deleted"); 
    document.querySelector('#div-post-entries').innerHTML = '';
});