// Jardiel Silva Almeida 
/*
Escreva um script que solicite ao usuário um CEP
e faça uma requisição à API do ViaCEP para obter
os dados do endereço correspondente. Exiba na tela
apenas a cidade.
*/

const readline = require('readline');
let valordigitado;


// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o cep que deseja consultar: ", function(resposta){
  valordigitado = resposta;
  rl.close();
});

rl.on("close", function() {
  console.log("Você digitou:",valordigitado );
  const fetchData = async () => {
    try {
      const response = await fetch("https://viacep.com.br/ws/" + valordigitado + "/json/");
      const data = await response.json();
      console.log(data.localidade);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };
  
  fetchData();
});
