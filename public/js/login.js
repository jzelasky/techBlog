const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Successfully logged in')
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
};

const createUserFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-create').value.trim();
  const password = document.querySelector('#password-create').value.trim();

  if (username && password){
    const response = await fetch('/api/users', {
      method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      alert('Successfully created user. You are now logged in.')
      document.location.replace('/');
    } else {
      alert('Failed to create user');
    }
  }
}
  
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.create-user-form')
  .addEventListener('submit', createUserFormHandler)