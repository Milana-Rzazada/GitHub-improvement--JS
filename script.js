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