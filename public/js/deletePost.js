const deletePostHandler = async () => {
    
    if (confirm("Are you sure? This action cannot be undone.")){
        const id = document.querySelector('#delete').className.slice(9);
    
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
}

document
  .querySelector('#delete')
  .addEventListener('click', deletePostHandler);


