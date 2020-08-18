function sumOf(param){
    let num1= parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value); // optimized for fewer lines
    
    let print = document.getElementById("results")


if(param == 'plus'){
    print.innerHTML = num1 + num2; // stil works
} else if (param == 'minus'){
    print.innerText = num1 - num2;
} else if (param == 'times'){
    print.innerText = num1 * num2;
} else if( param == 'devidedBy'){
    print.innerText = num1 / num2;
} 
}