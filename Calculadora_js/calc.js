
var salvos


function botao(num){

    //|| "-" || "/" || "*"
    if (value == "1"){
        alert("alerta de operação")
    }else{      
        salvos = document.calc.visor.value
        document.calc.visor.value = salvos + num
        salvos = document.calc.visor.value
    }

}

function calcule(){
    document.calc.visor.value = eval(salvos)
}