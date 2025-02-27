window.onload = hide();

function hide() {
let month_year_select = document.querySelector(".select_two");
let select = document.querySelector(".select").value;
if (select == "payment_amount") {
 month_year_select.style.display = "none"; 
} else {
month_year_select.style.display = "block"; 
}
}
