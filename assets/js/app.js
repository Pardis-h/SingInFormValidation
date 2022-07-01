// SELECT ELEMENTS
const userFirstName = document.querySelector(".user-first-name");
const userFirstNameMsg = document.querySelector(".first-name-msg");
const userLastName = document.querySelector(".user-last-name");
const userLastNameMsg = document.querySelector(".last-name-msg");
const userEmail = document.querySelector(".user-email");
const userEmailMsg = document.querySelector(".email-msg");
const userPassword = document.querySelector(".user-password");
const userPasswordMsg = document.querySelector(".password-msg");
const userRepeatPassword = document.querySelector(".user-repeat-password");
const userRepeatPasswordMsg = document.querySelector(".repeat-password-msg");
const signinBtn = document.querySelector(".signin-btn");
const signinMsg = document.querySelector(".signin-msg");
const signinForm = document.querySelector(".signin-form");

// Validation on submit Form
signinForm.addEventListener("submit" , signinValidation);

function signinValidation (event){

    let hasErrors = false ;

    const userFirstNameValue = userFirstName.value;
    const userLastNameValue = userLastName.value;
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value;
    const userRepeatPasswordValue = userRepeatPassword.value;

    userFirstNameMsg.innerText = "";    
    userLastNameMsg.innerText = ""; 
    userEmailMsg.innerText = "";
    userPasswordMsg.innerText = "";
    userRepeatPasswordMsg.innerText = "";
    signinMsg.innerText = "";


    if (userFirstNameValue.length === 0 || userFirstNameValue.length < 3){
        userFirstNameMsg.innerText = "Please Enter Your First Name";
        hasErrors = true;
    }else if(userLastNameValue.length === 0 || userLastNameValue.length < 3){
        userLastNameMsg.innerText = "Please Enter Your Last Name";
        hasErrors = true;
    }else if(userEmailValue.length === 0 || userEmailValue.indexOf("@") === -1 || userEmailValue.indexOf(".") === -1){
        userEmailMsg.innerText = "Please Enter a Valid Email";
        hasErrors = true;
    }else if(userPasswordValue.length === 0){
        userPasswordMsg.innerText = "Please Enter Your Password";
        hasErrors = true;
    }else if(userPasswordValue.length < 6){
        userPasswordMsg.innerText = "Your Password Is too Short";
        hasErrors = true;
    }else if( userRepeatPasswordValue !== userPasswordValue ){
        userRepeatPasswordMsg.innerText = "Please Make Sure Your Password Match";
        hasErrors = true;
    }

    if (hasErrors) {
        event.preventDefault();
    }else{
        event.preventDefault();
        const body = JSON.stringify({
            userFirstName : userFirstNameValue,
            userLastName : userLastNameValue,
            userEmailValue : userEmailValue,
            userPassword : userPasswordValue
        });
        const header = {
            'Content-Type' : "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : "POST",
            body : body,
            headers : header,
        })
            .then((response) =>{
                if(response.ok){
                    // console.log(response);
                    signinMsg.innerText = "You signed in successfully";
                }
            })
    }


}
