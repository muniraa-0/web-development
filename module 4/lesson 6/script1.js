function validate(event) {
   event.preventDefault(); //Prevent form submission

   const email = document.getElementById
   ('email').value;
   const password = document.getElementById
   ('password').value;
   const age = document.getElementById
   ('age').value;
   const msgBox = document.getElementById
   ('message');

   var massage = [];
   if (email === '') {
    massage = 'please enter an email.';
    msgBox.style.color = 'red';
   }
   else if (password === '') {
        massage = 'please enter a password that contains 8 characters';
        msgBox.style.color = 'red';
    }
   else if (age === '') {
       massage = 'age must be at 12 and 50';
       msgBox.style.color = 'red';
   }
   else {
    massage = 'Login successful';
    msgBox.style.color = 'green';
   }
   msgBox.innerText = massage;
}