const birthdayInput = document.getElementById('birthday')
const registratiaForm = document.getElementById('registratiaForm')

const today = new Date().toISOString().split('T')[0]
birthdayInput.setAttribute('max', today)

registratiaForm.addEventListener('submit', function (event) {
	event.preventDefault()

	const nameInput = document.getElementById('name')
	const genderInput = document.getElementById('gender')

	localStorage.setItem('name', nameInput.value)
	localStorage.setItem('gender', genderInput.value)
	localStorage.setItem('birthday', birthdayInput.value)

	window.location.href = './glavnaia.html'
})
