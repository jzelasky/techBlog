const editPostHandler = async () => {
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = document.location.href.slice(57)

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to edit post.')
    }
}


document
  .querySelector('#submit')
  .addEventListener('click', editPostHandler);