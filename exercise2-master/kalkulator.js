var total;

function hitung() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    if (operator == "+") {
        total = angka1+angka2;
    }
    else if (operator == "-") {
        total = angka1-angka2;
    }
    else if (operator == "*") {
        total = angka1*angka2;
    }
    else if (operator == "/") {
        total = angka1/angka2;
    }
    hasil.value = total;
}