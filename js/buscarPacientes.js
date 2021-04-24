var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest(); //faz requisições
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        
        try{
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // vai pegar o arquivo JSON que é uma string e transformar em um array de objetos

            for (paciente of pacientes){
                adicionaPacienteNaTabela(paciente);
            }
        }catch(e){
            erroAjax.classList.remove("invisivel");
            console.log("deu ruim");
        }
    });

    xhr.send(); //pega a requisição que foi criada e a envia
})