const form = document.getElementById('form')
const password = document.getElementById('password1')
const confirmPassword = document.getElementById('password2')
const msgContainer = document.querySelector('.msg_container')
const msg = document.getElementById('msg')
let isValid = false
let isPasswordMatch = false
function validateRegistration() {
  //
  isValid = form.checkValidity()
  console.log(isValid)
  //   Style change for error
  if (!isValid) {
    msg.textContent = 'Please fill all the fields'
    msg.style.color = 'red'
    msgContainer.style.borderColor = 'red'
    return
  }
  if (password.value === confirmPassword.value) {
    isPasswordMatch = true
    password.style.borderColor = 'green'
    confirmPassword.style.borderColor = 'green'
  } else {
    isPasswordMatch = false
    msg.textContent = 'Make sure Password is Matching'
    msg.style.color = 'red'
    msgContainer.style.borderColor = 'red'
    password.style.borderColor = 'red'
    confirmPassword.style.borderColor = 'red'
    return
  }

  if (isValid && isPasswordMatch) {
    msg.textContent = 'Successfully Registered'
    msg.style.color = 'green'
    msgContainer.style.borderColor = 'green'
  }
}

function storeRegistrationData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.websiteUrl.value,
    password: form.password1.value,
  }
  console.log(user)
}
function processRegistrationData(e) {
  e.preventDefault()
  console.log(e)
  // Validate
  validateRegistration()
  // Store Data
  if (isValid && isPasswordMatch) {
    storeRegistrationData()
  }
}

// Event listener
form.addEventListener('submit', processRegistrationData)
