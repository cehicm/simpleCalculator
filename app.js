function sumOf(param){
    let num1= parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value); // optimized for fewer lines
    
    let print = document.getElementById("results")

    (param == 'plus') ? print.innerHTML = num1 + num2
    : (param = 'minus') ? print.innerText = num1 - num2
    : (param = 'times') ?  print.innerText = num1 * num2
    : (param = 'devidedBy')?  print.innerText = num1 / num2
    : console.log('bad');
}