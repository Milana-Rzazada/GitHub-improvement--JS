// Mouse Events
const mouseBtn1 = document.getElementById('mouseBtn1');
const mouseBtn2 = document.getElementById('mouseBtn2');
const message = document.getElementById('message');
const mouseMessage = document.getElementById('mouseMessage');

mouseBtn1.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'You can send your message!';
});

mouseBtn2.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'You can cancel!';
});

message.addEventListener('mouseover', () =>{
    mouseMessage.textContent = 'You have to write your message here!'
});



const lastKey = document.getElementById('lastKey');
const  pressKey= document.getElementById('pressKey');

lastKey.addEventListener('keydown', (e) => {
  pressKey.textContent = e.key;
});



// Form Events
const eventForm = document.getElementById('eventForm');
const formMessage = document.getElementById('formMessage');

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = eventForm.elements['name'].value.trim(); 
  const surname = eventForm.elements['surname'].value.trim();
  const email = eventForm.elements['email'].value.trim();
  const dob = eventForm.elements['dob'].value.trim();

  if (name && surname && email && dob) {
    formMessage.textContent = `Hello, ${name}!` + ` Your information:, ${name}, ${surname}, ${email}, ${dob}`;
  } else {
    formMessage.textContent = `Please, enter your information!`;
  }
});


const focusBlur = document.getElementById('focusBlur');
const focusBlurMessage = document.getElementById('focusBlurMessage');

focusBlur.addEventListener('focus', () => {
  focusBlurMessage.textContent = 'You have focused on the input field!';
});

focusBlur.addEventListener('blur', () => {
  focusBlurMessage.textContent = 'You have left the input field!';
});
