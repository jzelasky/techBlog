const createPostHandler = async () => {
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        }
    } else {
        alert('Posts must contain a title and content.');
        return;
    }
}

document
  .querySelector('#submit')
  .addEventListener('click', createPostHandler);