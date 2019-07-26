//Welcome to the Narcissistic coding challenge

let narcNum = (num) => {

    num = document.getElementById("Num").value;
    
    let numberLength = parseInt(num.length);

    let num2 = [];

    let result = [];
   

    for (var i=0; i < num.length; i++){
    
        num2.push(parseInt(num[i]));
    }

    for (var i = 0; i < num2.length; i++){

        result.push(Math.pow(num2[i], numberLength));
    }

  var add = result.reduce((a,b) => a + b, 0);
    if (add == num) {
        document.getElementById('Result').value = "This is a narcissistic number";
    } else{
        document.getElementById('Result').value = "This is not a narcissistic number";
    }

}


