const editPostHandler = async () => {
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    const loc = document.location
    const slice = loc.slice(5,10)

    console.log(slice.datatype)

    /*
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    */
}


document
  .querySelector('#submit')
  .addEventListener('click', editPostHandler);