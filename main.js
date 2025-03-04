//global variables holding html input values
let loan_amount;
let interest_rate;
let payment_amount;
let select_input;
let months_years;


//function retrieves data from html inputs
function get_data() {
//Retrieves values of html inputs using html class selectors
loan_amount = document.querySelector(".loan_amount_input").value;
interest_rate = document.querySelector(".interest_rate_input").value;
select_input = document.querySelector(".select_input").value;
select = document.querySelector(".select").value;
months_years = document.querySelector(".select_two").value;


//Converts all values of html inputs into floats
loan_amount = parseFloat(loan_amount);
interest_rate = parseFloat(interest_rate);
select_input = parseFloat(select_input);

//If user selects calculate payment runs function to calculate payment.
//If user selects calculate months runs function to calculate number of months.
if (select == "number_of_months") {
calculate_payment();
} else {
calculate_months();
}
}


//function calculates monthly payment
function calculate_payment() {
//declares variable number_of_months
let number_of_months;

//if years are slected instead of months. Converts years to months.
if (months_years == "years") {
number_of_months = select_input*12;
} 
else {
number_of_months = select_input;  
}

//adjusted intrest rate
let interest_rate_adjusted = interest_rate/1200

let temp_one = 1+interest_rate_adjusted;
let temp_two = Math.pow(temp_one, -number_of_months);
let temp_three = 1 - temp_two;
let monthly_payment = loan_amount * (interest_rate_adjusted/temp_three);
//rounds final calculation to two decimal places
 monthly_payment = monthly_payment.toFixed(2);

 //selects result html element and changes to calculation 
 let result_display = document.querySelector(".result");
 result_display.textContent = "Payment Per Month:  $" + monthly_payment;
}


//function calculates number of months based on set monthly payment
function calculate_months() {
    //sets payment_amount equal to data in select_input
	let payment_amount = select_input

    //adjust interest rate from percentage to decimal
    interest_rate_adjusted = interest_rate/1200;

    //formula to find loan months
    let temp_zero =  1 - (loan_amount/payment_amount) * interest_rate_adjusted;
    let temp_one = Math.log(temp_zero);
    let temp_two = Math.log(1 + interest_rate_adjusted);
    loan_months = -(temp_one/temp_two);
    //rounds final calculation up to nearest whole number
    loan_months = Math.ceil(loan_months);

    //selects result html element and changes to calculation 
    let result_display = document.querySelector(".result");
    result_display.textContent = loan_months + " Months";
}


//Report Generation 
function report_creation() {

    


    //window.open("report.html");
}


//clears data from inputs
function clear_data() {
document.querySelector(".loan_amount_input").value = "";
document.querySelector(".interest_rate_input").value = "";
document.querySelector(".select_input").value = "";
document.querySelector(".result").textContent = "Result";
}