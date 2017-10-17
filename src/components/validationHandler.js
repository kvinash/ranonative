export const ValidationHandler = (inputType, inputText)=>{

    if(inputType===`email`){
         return validateEmail(inputText)
    }
}

export const validateEmail = (inputText) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("in",inputText, re.test(inputText)) 
    return re.test(inputText);
};

 