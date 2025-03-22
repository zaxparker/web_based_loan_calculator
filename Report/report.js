//Report Generation 
function report_creation() {

    let payment_div = document.getElementById("payment");
    let month_div = document.getElementById("month");
    let principal_div = document.getElementById("principal");
    let interest_div = document.getElementById("interest");
    let balance_div = document.getElementById("balance");
    let total_principal_div = document.getElementById("total_principal");
    let total_interest_div = document.getElementById("total_interest");
    let total_payment_div = document.getElementById("total_payment");


    let i;

    for (i = 0; i <= 100; i++) {
    let create_payment = document.createElement("p");
    let create_month = document.createElement("p");
    let create_principal = document.createElement("p");
    let create_interest = document.createElement("p");
    let create_balance = document.createElement("p");
    let create_total_principal = document.createElement("p");
    let create_total_interest = document.createElement("p");
    let create_total_payment = document.createElement("p");

    create_payment.className = "value";
     create_month.className = "value";
     create_principal.className = "value";
     create_interest.className = "value";
     create_balance.className = "value";
     create_total_principal.className = "value";
     create_total_interest.className = "value";
     create_total_payment.className = "value";


     create_payment.innerHTML = i;
     create_month.innerHTML = "Month";
     create_principal.innerHTML = "Principal";
     create_interest.innerHTML = "Interest";
     create_balance.innerHTML = "Balance";
     create_total_principal.innerHTML = "Total Principal";
     create_total_interest.innerHTML = "Total Interest";
     create_total_payment.innerHTML = "Total Payment";




    payment_div.appendChild(create_payment);
    month_div.appendChild(create_month);
    principal_div.appendChild(create_principal);
    interest_div.appendChild(create_interest);
    balance_div.appendChild(create_balance);
    total_principal_div.appendChild(create_total_principal);
    total_interest_div.appendChild(create_total_interest);
    total_payment_div.appendChild(create_total_payment);

    }
    
    
      
    }