//global variables holding html input values
let loan_amount;
let interest_rate;
let payment_amount;
let number_of_months;
let months_years;



function get_data() {
//Retrieves values of html inputs using html class selectors
loan_amount = document.querySelector(".loan_amount_input").value;
interest_rate = document.querySelector(".interest_rate_input").value;
number_of_months = document.querySelector(".select_input").value;
select = document.querySelector(".select").value;
months_years = document.querySelector(".select_two").value;


//Converts all values of html inputs into floats
loan_amount = parseFloat(loan_amount);
interest_rate = parseFloat(interest_rate);
number_of_months = parseFloat(number_of_months);
payment_amount = parseFloat(payment_amount);

//If user selects calculate payment runs function to calculate payment.
//If user selects calculate months runs function to calculate number of months.
if (select == "number_of_months") {
calculate_payment();
} else {
calculate_months();
}
}



function calculate_payment() {

//if years are slected instead of months. Converts years to months.
if (months_years == "years") {
number_of_months = number_of_months*12;
} 

//adjusted intrest rate
let interest_rate_adjusted = interest_rate/12


let formula = 1+interest_rate_adjusted;
formula = Math.pow(formula, -number_of_months)
formula = 1 - formula

let monthly_payment = loan_amount * (interest_rate_adjusted/formula);

alert(monthly_payment);
}



function calculate_months() {

alert("ran calculate months function");

}