// Validate function

let notificationArea = document.querySelector('.notification')

function validate() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  if (username == 'client' && password == 'pass') {
    sessionStorage.setItem('role', 'client')
    window.location.replace('/main/')
  }
  else if (username == 'admin' && password == 'pass') {
    sessionStorage.setItem('role', 'admin')
    window.location.replace('/main/')
  }
  else {
    if (notificationArea.classList.contains('hide')) {
      notificationArea.classList.remove('hide')
    }
    else {
      notificationArea.classList.add('hide')
      setTimeout(() => {
        notificationArea.classList.remove('hide')
      }, 200)
    }
  }
}

// Display notification when login information is not accepted
function hideNotification() {
  document.querySelector('.notification').classList.add('hide')
}

// Hide notification when press information
document.querySelector('#password').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    validate()
  }
})
document.querySelector('#username').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    validate()
  }
})