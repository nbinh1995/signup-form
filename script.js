// form
const FIRSTNAME=document.getElementById('js-first-name');
const LASTNAME=document.getElementById('js-last-name');
const EMAIL=document.getElementById('js-email');
const PASSWORD=document.getElementById('js-password');
const SUBMIT=document.getElementById('js-submit');
// status error
// Fist name error
const ERIMG_FIRST=document.getElementById('js-er-img-first-name');
const ERTEXT_FIRST=document.getElementById('js-er-text-first-name');
// Last name error
const ERIMG_LAST=document.getElementById('js-er-img-last-name');
const ERTEXT_LAST=document.getElementById('js-er-text-last-name');
// Email name error
const ERIMG_EMAIL=document.getElementById('js-er-img-email');
const ERTEXT_EMAIL=document.getElementById('js-er-text-email');
// Password name error
const ERIMG_PASS=document.getElementById('js-er-img-password');
const ERTEXT_PASS=document.getElementById('js-er-text-password');

//----------------------------------------------------------------------------

SUBMIT.addEventListener('click',checkErrorInput);
function checkErrorInput(){
    
    if(FIRSTNAME.value === '') 
   {ERIMG_FIRST.style.display = 'block';
    ERTEXT_FIRST.style.display = 'block';
    FIRSTNAME.style.border = '1px  solid red';}
    else  
   {ERIMG_FIRST.style.display = 'none';
    ERTEXT_FIRST.style.display = 'none';
    FIRSTNAME.value = '';
    FIRSTNAME.style.border = '1px  solid hsl(246, 25%, 77%)';}

    if(LASTNAME.value === '') 
   {ERIMG_LAST.style.display = 'block';
    ERTEXT_LAST.style.display = 'block';
    LASTNAME.style.border = '1px  solid red';}
    else  
   {ERIMG_LAST.style.display = 'none';
    ERTEXT_LAST.style.display = 'none';
    LASTNAME.value = '';
    LASTNAME.style.border = '1px  solid hsl(246, 25%, 77%)';}
    
    if(EMAIL.value.indexOf('@') === -1) 
   {ERIMG_EMAIL.style.display = 'block';
    ERTEXT_EMAIL.style.display = 'block';
    EMAIL.value = 'email@example/com';
    EMAIL.style.color = 'red';
    EMAIL.style.border = '1px  solid red';}
    else  
   {ERIMG_EMAIL.style.display = 'none';
    ERTEXT_EMAIL.style.display = 'none';
    EMAIL.placeholder='Email Address';
    EMAIL.value = '';
    EMAIL.style.color = 'black'
    EMAIL.style.border = '1px  solid hsl(246, 25%, 77%)';}

    if(PASSWORD.value === '') 
   {ERIMG_PASS.style.display = 'block';
    ERTEXT_PASS.style.display = 'block';
    PASSWORD.style.border = '1px  solid red';}
    else  
   {ERIMG_PASS.style.display = 'none';
    ERTEXT_PASS.style.display = 'none';
    PASSWORD.value = '';
    PASSWORD.style.border = '1px  solid hsl(246, 25%, 77%)';}

}