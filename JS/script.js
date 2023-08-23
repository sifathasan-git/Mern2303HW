function EvenOddCheck(){
    var input_number = document.getElementById('EvenOdd').value;

    if(input_number % 2 === 0){
        document.getElementById('print_EvenOdd_result').innerHTML = "This Number " + input_number + " is Even";
    }
    else{
        document.getElementById('print_EvenOdd_result').innerHTML = "This Number " + input_number + " is Odd";
    }
    if(input_number==""){
        document.getElementById('print_EvenOdd_result').innerHTML = "";
    }
}
function Leap_yearCheck(){
    var input_year = document.getElementById('Leap_year').value;
    if (input_year % 400 === 0) {
        document.getElementById('print_LeapYear').innerHTML = "This Year " + input_year + " is Leap Year";
     }
     else if (input_year % 100 === 0) {
        document.getElementById('print_LeapYear').innerHTML = "This Year " + input_year + " is Not Leap Year";
     }
     else if (input_year % 4 === 0) {
        document.getElementById('print_LeapYear').innerHTML = "This Year " + input_year + " is Leap Year";
     }
     else {
        document.getElementById('print_LeapYear').innerHTML = "This Year " + input_year + " is Not Leap Year";
     }

     if (input_year === "") {
        document.getElementById('print_LeapYear').innerHTML = "";
     }
}
document.getElementById('test').innerHTML="<font size='22px'></font>"

    // let number1 = document.getElementById("1st_table").value;
    // let number2 = document.getElementById("2nd_table").value;
    let num1 = window.prompt("enter 1st number");
    let num2 = window.prompt("enter 2st number");
function multiplication_table(number1,number2){
    
    
    for(let i=num1;i<=num2;i++){
        for(let j=1; j<=10;j++){
           let result=i*j;
            document.write(`${i}X${j}=${result} <br>`);
        }
        
    }
}
multiplication_table();