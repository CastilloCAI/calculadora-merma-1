window.onload = iniciar;

function iniciar() {
    var calcular = document.getElementById("calcular")
    calcular.addEventListener("click", clickcalcular);

}

function clickcalcular(){
    var stock = document.getElementById("stock");
    var pesoBruto = stock.value;

    var produ = document.getElementById("produ");
    var pesoNeto = produ.value;

    var ventas = document.getElementById("ventas");
    var ingresos = ventas.value;

    var egreso = document.getElementById("egreso");
    var salidas = egreso.value;

    var saldo = document.getElementById("saldo");
    var stockActual = saldo.value;

    var sCont = (pesoBruto + pesoNeto) - ingresos;
    var merma = (pesoBruto + pesoNeto)-(ingresos + salidas)- stockActual / (pesoNeto + pesoBruto) * 100;
    var mPorc = merma / (pesoBruto + pesoNeto);
    
alert(sCont);
alert(merma);
alert(mPorc);
}
