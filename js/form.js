"use strict"

const $ = (selector) =>{
    return document.querySelector(selector);
}

const validate = (e) =>{
    let f = false;

    

    const inputDate = new Date($("#rdate").value.toString());
    const currentdate = new Date();


    if(inputDate < currentdate){
        alert("Please select valid Date");
        $("#rdate").focus();
        f=true;
    }

    if(f){
        e.preventDefault();
    }
   
}

document.addEventListener("DOMContentLoaded",()=>{
    
    $("#submit").addEventListener("click",validate);
    
})
