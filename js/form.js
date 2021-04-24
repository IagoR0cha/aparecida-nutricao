function obtemPacienteFormulario(form){

    var paciente = {
        nome: form.txtNome.value, 
        peso: form.txtPeso.value,
        altura: form.txtAltura.value,
        gordura: form.txtGordura.value,
        imc: calcImc(form.txtPeso.value, form.txtAltura.value)
    }

    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr"); //cria a tr

    pacienteTr.classList.add("paciente"); // adiciona o tr na classe de css "paciente"

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function alteraCorCampo(id){
    var campo = document.querySelector(id);
    campo.classList.add("campo-invalido");
}


function mensagemErro(erros){

    var ul = document.querySelector(".mensagem-erro");
    ul.innerHTML = "";
    for(erro of erros){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }

}

function verificaDadosEntrada(paciente){

    var listaErros = [];
    if(paciente.nome.length == 0){
        listaErros.push("Nome Inválido!");
        alteraCorCampo("#txtNome");
    }

    if(paciente.gordura <= 0 || paciente.gordura.length == 0){
        listaErros.push("Percentual de Gordura Inválida!");
        alteraCorCampo("#txtGordura");
    }
    
    if(paciente.peso < 0 || paciente.peso >= 1000 || paciente.peso.length == 0){
        listaErros.push("Peso Inválido!");
        alteraCorCampo("#txtPeso");
    }
    if(paciente.altura < 0 || paciente.altura > 4 || paciente.altura.length == 0){
        listaErros.push("Altura Inválida!");
        alteraCorCampo("#txtAltura");
    }

    return listaErros;
}

function adicionaPacienteNaTabela(paciente){
    var montTr = montaTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montTr); 
}

function btAdicionarEvento(event){
    event.preventDefault();

    var form = document.querySelector(".form-adiciona");
    
    var paciente = obtemPacienteFormulario(form);
    

    var erros = verificaDadosEntrada(paciente);
    

    if(erros.length > 0){
        mensagemErro(erros);

    }else{
        adicionaPacienteNaTabela(paciente)

        form.reset();
        var mensagensDeErro = document.querySelector(".mensagem-erro");
        mensagensDeErro.innerHTML = "";
    }
    /*
    if(verificaDados(paciente.peso, paciente.altura)){

        var montTr = montaTr(paciente);
    
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(montTr); 

        form.reset();
        
    }else{
        alert("Os valores não são coerentes. Verifique-os!");
    } 
    */

}





var btAdicionar = document.querySelector("#adicionar-paciente");

btAdicionar.addEventListener("click", btAdicionarEvento);