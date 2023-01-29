const username = document.getElementById('username'),
  password = document.getElementById('password'),
  confirmPassword = document.getElementById('confirmPassword'),
  tel = document.getElementById('tel'),
  usrError = document.getElementById('usrError'),
  usrHint = document.getElementById('usrHint'),
  telError = document.getElementById('telError'),
  confirmPswrdError = document.getElementById('confirmPswrdError'),
  submit = document.getElementById('submit'),
  pswrdCap = document.getElementById('pswrdCap'),
  pswrdNum = document.getElementById('pswrdNum'),
  pswrdSym = document.getElementById('pswrdSym'),
  pswrdSm = document.getElementById('pswrdSm'),
  usernameErrorSymbol = document.getElementById('username_error_symbol'),
  telErrorSymbol = document.getElementById('tel_error_symbol'),
  passwordErrorSymbol = document.getElementById('password_error_symbol'),
  confirmPasswordErrorSymbol = document.getElementById('confirmPassword_error_symbol');
let usrErrorMessage,
  usrValue,
  pswrdValue,
  confirmPswrdValue = '',
  telValue = '';
username.addEventListener('input', (e) => {
  usrValue = e.target.value;
  if (usrValue != 'Username') {
    usrHint.innerHTML = `Username Hint: "Username"`
    usrHint.style.color = 'green'
    usernameErrorSymbol.style.color = 'red'
    usrError.style.color = 'red';
    usrErrorMessage = 'Username unavailable';
    usrError.innerHTML = usrErrorMessage;
    console.log('User Mismatched');
  } else if (usrValue === 'Username') {
    usrHint.innerHTML = ''
    username.style.color = 'black'
    usernameErrorSymbol.innerHTML = '✔'
    usernameErrorSymbol.style.color = 'green'
    usrError.innerHTML = 'Username Available';
    usrError.style.color = 'green';
  }
});
username.addEventListener('focusout', () => {
  if (usrValue === 'Username') {
    usrError.innerHTML = '';
    username.style.color = 'black'
  }else{
    username.style.color = 'red'
  }
});
password.addEventListener('input', (e) => {
  pswrdValue = e.target.value;
  if (!/[0-9]/.test(pswrdValue)) {
    pswrdNum.innerHTML = 'Password must contain a number ✘';
    pswrdNum.style.color = 'red';
  } else {
    pswrdNum.innerHTML = 'Password contains a number ✔';
    pswrdNum.style.color = 'green';
  }
  if (!/[A-Z]/.test(pswrdValue)) {
    pswrdCap.innerHTML = 'Password must contain an UPPERCASE character ✘';
    pswrdCap.style.color = 'red';
  } else {
    pswrdCap.innerHTML = 'Password contains an UPPERCASE character ✔';
    pswrdCap.style.color = 'green';
  }
  if (!/[a-z]/.test(pswrdValue)) {
    pswrdSm.innerHTML = 'Password must contain a lowercase character ✘';
    pswrdSm.style.color = 'red';
  } else {
    pswrdSm.innerHTML = 'Password contains lowercase character ✔';
    pswrdSm.style.color = 'green';
  }
  if (!/[/.,_+=;:@%*]/.test(pswrdValue)) {
    pswrdSym.innerHTML = 'Password must contain a symbol (/.,_+=;:@%*) ✘';
    pswrdSym.style.color = 'red';
  } else {
    pswrdSym.innerHTML = 'Password contains a symbol ✔';
    pswrdSym.style.color = 'green';
  }
  if (/[0-9]/.test(pswrdValue) && /[A-Z]/.test(pswrdValue) && /[a-z]/.test(pswrdValue) && /[/.,_+=;:@%*]/.test(pswrdValue)) {
    passwordErrorSymbol.innerHTML = '✔'
    passwordErrorSymbol.style.color = 'green'
  }else{
    passwordErrorSymbol.innerHTML = '✘'
    passwordErrorSymbol.style.color = 'red' 
  }
  if (!(confirmPswrdValue === pswrdValue)){
    confirmPasswordErrorSymbol.innerHTML = '✘'
    confirmPasswordErrorSymbol.style.color = 'red'
    confirmPswrdError.innerHTML = 'passwords do not match ✘'
    confirmPswrdError.style.color = 'red'
  }else{
    if (confirmPswrdValue > 0) {
      
      confirmPasswordErrorSymbol.innerHTML = '✔'
      confirmPasswordErrorSymbol.style.color = 'green'
      confirmPswrdError.innerHTML = 'passwords match ✔'
      confirmPswrdError.style.color = 'green'
    }
  }
});
password.addEventListener('focusout', (e) => {
  if (/[0-9]/.test(pswrdValue)) {
    pswrdNum.innerHTML = '';
  }
  if (/[A-Z]/.test(pswrdValue)) {
    pswrdCap.innerHTML = '';
  }
  if (/[a-z]/.test(pswrdValue)) {
    pswrdSm.innerHTML = '';
  }
  if (/[/.,_+=;:@%*]/.test(pswrdValue)) {
    pswrdSym.innerHTML = '';
  }
  if (confirmPswrdValue === pswrdValue){
    confirmPswrdError.innerHTML = '';
  }
});
confirmPassword.addEventListener('input', (e)=>{
  confirmPswrdValue = e.target.value;
  if (e.target.value === pswrdValue && (e.target.value.length > 0)) {
    confirmPasswordErrorSymbol.innerHTML = '✔'
    confirmPasswordErrorSymbol.style.color = 'green'
    confirmPswrdError.innerHTML = 'passwords match ✔'
    confirmPswrdError.style.color = 'green'
  } else {
    confirmPasswordErrorSymbol.innerHTML = '✘'
    confirmPasswordErrorSymbol.style.color = 'red'
    confirmPswrdError.innerHTML = 'passwords do not match ✘'
    confirmPswrdError.style.color = 'red'

  }
})
confirmPassword.addEventListener('focusout', (e)=>{
  if(e.target.value === pswrdValue){
    confirmPswrdError.innerHTML = ''
  }
})
tel.addEventListener('keydown', (e) => {
  if (
    ![
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      'Backspace',
    ].includes(e.key)
  ) {
    e.preventDefault();
  }
  if (!(telValue.length < 11) && !['Backspace'].includes(e.key)) {
    e.preventDefault();
  }
});
tel.addEventListener('input', (e) => {
  telValue = e.target.value;
  if (telValue.length < 11) {
    telError.innerHTML = 'Number not up to 11 digits';
    telError.style.color = 'red';
    telErrorSymbol.style.color = 'red'
    telErrorSymbol.innerText = '✘'
  } else {
    tel.style.color = 'black'
    telErrorSymbol.innerHTML = '✔'
    telErrorSymbol.style.color = 'green'
    telError.innerHTML = 'Number Okay';
    telError.style.color = 'green';
  }
  tel.addEventListener('focusout', () => {
    if (!(telValue.length < 11)) {
      telError.innerHTML = '';
    }else{
      tel.style.color = 'red'
    }
  });
});
submit.addEventListener('click', (e) => {
  if(usernameErrorSymbol.innerHTML == '✘' || telErrorSymbol.innerHTML == '✘' || passwordErrorSymbol.innerHTML == '✘' || confirmPasswordErrorSymbol.innerHTML == '✘'){
    e.preventDefault();
  }
});
