const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
const formTitle = document.getElementById('form-title');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const body = document.getElementById('body');
const connect= document.getElementById('connect');
const conectlink=document.getElementById('connect-link');
toggleLink.addEventListener('click', () => {
if (loginForm.style.display === 'none') {
loginForm.style.display = 'block';
registerForm.style.display = 'none';
body.classList.remove('swapped');

}
 else if (registerForm.style.display === 'none') {
loginForm.style.display = 'none';
registerForm.style.display = 'block';
body.classList.add('swapped');

}
else if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    body.classList.add('swapped');
    
} else {
loginForm.style.display = 'none';
registerForm.style.display = 'block';
body.classList.add('swapped');



}
});
conectlink.addEventListener('click', () => {
    if(registerForm.style.display === 'block'){
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        body.classList.remove('swapped');
    }else if(loginForm.style.display === 'block'){
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        body.classList.add('swapped');
    }
    

});


