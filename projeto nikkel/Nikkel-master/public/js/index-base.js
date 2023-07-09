const nome = "adriano";

let nome2 = "";

let pessoaDefault = {
    nome: "Adriano",
    idade: "23",
    trabalho: "Programador"

}

let pessoas = [];

function alterarnome(){
    nome2 = "pereira";
    console.log("nome alterado com function");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome)
    
    console.log("Idade:");
    console.log(pessoa.idade)
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho)
}

//imprimirPessoa(pessoaDefault);

/*imprimirPessoa({
    nome: "Maria",
    idade: "25",
    trabalho: "Designer"
});

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarnome();
