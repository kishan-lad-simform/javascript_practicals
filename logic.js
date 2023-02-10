

function get_value(a) {
    forms.question.value += a;
    console.log(forms.question.value)
}


function total() {
    forms.answer.value = eval(forms.question.value);
}

function remove_dig() {
    var x = forms.question.value;
    forms.question.value = x.substring(0, x.length - 1);
}
function double_squre_root() {

    var num = forms.question.value;
    var store = Math.sqrt(num);
    forms.answer.value = store;
}
function clear_screen() {
    forms.question.value = "";
    forms.answer.value = "";
}
function factorial() {
    var n = forms.question.value;
    let answer = 1;
    if (n == 0 || n == 1) {
        answer = 1;
    }
    else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    forms.answer.value = answer;
}
function power() {
    var power_value = Math.pow(forms.question.value, 2);
    forms.answer.value = power_value;
}

function set_pie() {
    var x = forms.question.value;
    var y = x * 3.141;
    forms.answer.value = y;
}

function ten_raise() {
    var x = forms.question.value;
    forms.answer.value = Math.pow(10, parseFloat(x));
}

function logarithm_check() {
    var l = forms.question.value;
    var l1 = Math.log10(l);
    forms.answer.value = l1;
}

function check_ln() {
    var l1 = forms.question.value;
    var l2 = Math.log(l1);
    forms.answer.value = l2;

}

function exp_check() {
    var e = forms.question.value;
    var check = Math.exp(e);
    forms.answer.value = check;
}
function check_e() {
    var e1 = forms.question.value;
    var e2 = e1 * Math.E;
    forms.answer.value = e2;
}
function devide_by_one() {
    var x1 = forms.question.value;
    var x2 = 1 / x1;
    forms.answer.value = x2;
}
function check_abs() {
    var abs = forms.question.value;
    var abs_result = Math.abs(abs);
    forms.answer.value = abs_result;
}

function plus_minus() {
    var x = forms.question.value;
    forms.answer.value = -1 * parseFloat(forms.question.value);
}

let sel = document.querySelector(".drop")
sel.onchange = (event) => {
    console.log(event.target.value)
    var operation = event.target.value;

    if (operation == "sin") {
        forms.answer.value = Math.sin(forms.question.value);
    } else if (operation == "cos") {
        forms.answer.value = Math.cos(forms.question.value);
    } else if (operation == "tan") {
        forms.answer.value = Math.tan(forms.question.value);
    } else if (operation == "cosec") {
        let sine = Math.sin(forms.question.value);
        let cosec = 1 / sine;
        forms.answer.value = cosec;
    } else if (operation == "sec") {
        let cosine = Math.cos(forms.question.value);
        let sec = 1 / cosine;
        forms.answer.value = sec;
    } else if (operation == "cot") {
        let tangent = Math.tan(forms.question.value);
        let cot = 1/tangent
        forms.answer.value = cot;
    }
}

let sel1 = document.querySelector(".drop2")
sel1.onchange = (event) => {
    console.log(event.target.value)
    var operation1 = event.target.value;

    if (operation1 == "floor") {
        forms.answer.value = Math.floor(forms.question.value);
    } else if (operation1 == "ceil") {
        forms.answer.value = Math.ceil(forms.question.value);
    } else if (operation1 == "trunc") {
        forms.answer.value = Math.trunc(forms.question.value);
    } 
}


