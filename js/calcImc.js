function calcImc(peso, altura){

    var erros = verificaDadosTabela(peso, altura);

    if(erros.length > 0 ){
        return erros; 
    }else{
        var imc = peso / (altura * altura)
        return imc.toFixed(2);
    }
}

function validaInfoPacientes(pacientes){

    for(paciente of pacientes){
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        var tdImc = paciente.querySelector(".info-imc");

        tdImc.textContent = calcImc(peso, altura);
        if(calcImc(peso, altura) == "Altura Inválida!"){
            paciente.classList.add("paciente-invalido");
        }else if(calcImc(peso, altura) == "Peso Inválido!"){
            paciente.classList.add("paciente-invalido");
        }else if(calcImc(peso, altura) == "Peso Inválido!,Altura Inválida!"){
            paciente.classList.add("paciente-invalido");
        }
    }
}

function verificaDadosTabela(peso, altura){
    var listaErros = [];
    if(peso < 0 || peso >= 1000){
        listaErros.push("Peso Inválido!");
    
    }if(altura < 0 || altura > 4){
        listaErros.push("Altura Inválida!")
    }

    return listaErros;
}




var pacientes = document.querySelectorAll(".paciente");
validaInfoPacientes(pacientes);



