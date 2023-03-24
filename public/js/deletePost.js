const deletePostHandler = async () => {
   
    const id = document.querySelector('#delete').className.slice(3);
    
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to delete post.')
    }
}

document
  .querySelector('#delete')
  .addEventListener('click', deletePostHandler);


