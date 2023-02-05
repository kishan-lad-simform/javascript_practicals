function designate(a){
    forms.question.value += a;
}

function total(){
    forms.question.value = eval(forms.question.value);
}

function remove_dig(){
    var x = forms.question.value;
    forms.question.value = x.substring(0, x.length-1);
}
function double_squre_root(){
    var num = forms.question.value;
    var store = 2*Math.sqrt(num);
    forms.question.value = store;
}
function clear_screen(){
    forms.question.value = "";
}
function  factorial(){
    var n = forms.question.value;
    let answer = 1;
    if (n == 0 || n == 1){
      answer = 1;
    }
    else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
    }
    forms.question.value = answer;
}
function power(){
    var power_value = Math.pow(forms.question.value,2);
    forms.question.value = power_value;

}
function set_pie(){
    var x = forms.question.value;
    var y = x * 3.141;
    forms.question.value = y;

}
function logarithm_check(){
    var l = forms.question.value;
    var l1 = Math.log10(l);
    forms.question.value = l1;
}
function exp_check(){
    var e = forms.question.value;
    var check = Math.exp(e);
    forms.question.value = check;
}
function check_e(){
    var e1 = forms.question.value;
    var e2 = e1 * Math.E;
    forms.question.value = e2;
}
function devide_by_one(){
    var x1 = forms.question.value;
    var x2 = 1/x1;
    forms.question.value = x2;
}
function check_abs(){
    var abs = forms.question.value;
    var abs_result = Math.abs(abs);
    forms.question.value = abs_result;
}
