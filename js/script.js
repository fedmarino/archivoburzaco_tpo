document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}


/** form validation ******************/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const user_message = document.getElementById('user_message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const user_messageValue = user_message.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Escriba su nombre');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Escriba su correo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No es un correo válido');
	} else {
		setSuccessFor(email);
	}
	
	if(user_messageValue === '') {
		setErrorFor(user_message, 'Escriba su mensaje');
	} else {
		setSuccessFor(user_message);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


/**************************/