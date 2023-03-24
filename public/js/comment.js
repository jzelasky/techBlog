const commentHandler = async () => {
    const content = prompt("Enter comment:");
    const blog_post_id = document.querySelector('#comment').className.slice(15);
   
    if (content){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, blog_post_id}),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace(`/details/${blog_post_id}`)
        }
    } else {
        alert('Comment must contain at least one character.')
    }
}

document
  .querySelector('#comment')
  .addEventListener('click', commentHandler);