var campoDeFiltro = document.querySelector("#txtPesquisa");


campoDeFiltro.addEventListener("input", function(){
    console.log(this.value); 
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value, "i"); //expressão regular (propia do JS) tem que passar como parametro (oqVcTaProcurando, comoProcurar) i-> case insensivit
            
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (paciente of pacientes){
            paciente.classList.remove("invisivel");
        }
    }

});