let input = document.getElementById("password");
let text = document.getElementById("strength");

input.addEventListener("input", function(){
    let val = input.value;
    let strength = "";

    if(val.length === 0){
        strength = "";
    }
    else if(val.length < 4){
        strength = "Weak 🔴";
    }
    else if(val.length < 8){
        strength = "Medium 🟡";
    }
    else{
        strength = "Strong 🟢";
    }

    text.innerText = strength;
});
