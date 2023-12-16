window.onload = iniciar;

function iniciar() {
    var calcular = document.getElementById("calcular")
    calcular.addEventListener("click", clickcalcular);

}

function clickcalcular(){
    var stock = document.getElementById("stock");
    var pesoBruto = stock.value;
    if (pesoBruto>0){
        ERROR.style.display='none'
        pesoBruto.innerHTML=pesoBruto +' %';
        pesoBruto.style.display=' block';
    } else {
        ERROR.style.display=' block';
        FLU.style.display=' none';
        MAN.style.display=' none';
    }


    var produ = document.getElementById("produ");
    var pesoNeto = produ.value;
    if (pesoNeto>0){
        ERROR.style.display='none'
        pesoNeto.innerHTML=pesoNeto +' %';
        pesoNeto.style.display=' block';
    } else {
        ERROR.style.display=' block';
        FLU.style.display=' none';
        MAN.style.display=' none';
    }


    var ventas = document.getElementById("ventas");
    var ingresos = ventas.value;
    if (ingresos>0){
        ERROR.style.display='none'
        ingresos.innerHTML=ingresos +' %';
        ingresos.style.display=' block';
    } else {
        ERROR.style.display=' block';
        FLU.style.display=' none';
        MAN.style.display=' none';
    }


    var egreso = document.getElementById("egreso");
    var salidas = egreso.value;
    if (salidas>0){
        ERROR.style.display='none'
        salidas.innerHTML=salidas +' %';
        salidas.style.display=' block';
    } else {
        ERROR.style.display=' block';
        FLU.style.display=' none';
        MAN.style.display=' none';
    }


    var saldo = document.getElementById("saldo");
    var stockActual = saldo.value;
    if (stockActual>0){
        ERROR.style.display='none'
        stockActual.innerHTML=stockActual +' %';
        stockActual.style.display=' block';
    } else {
        ERROR.style.display=' block';
        FLU.style.display=' none';
        MAN.style.display=' none';
    }


    var sCont = (pesoBruto + pesoNeto) - ingresos;
    var merma = (pesoBruto + pesoNeto)-(ingresos + salidas)- stockActual / (pesoNeto + pesoBruto) * 100;
    merma.innerHTML=merma+' %';
    merma.style.display=' block';
    var mPorc = merma / (pesoBruto + pesoNeto);
    
alert(sCont);
alert(merma);
alert(mPorc);
}
