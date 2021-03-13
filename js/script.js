function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}


function cleanAllSymbol() {
    document.form.textview.value = "";
}


function cleanLastSymbol() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}


function calc() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}