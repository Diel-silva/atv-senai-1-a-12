/*Utilize a estrutura switch para criar um menu com as opções:
1: Exiba "Cadastrar usuário".
2: Exiba "Listar usuários".
3: Exiba "Sair".
Caso a opção seja inválida, exiba "Opção inválida".*/

let opcao = 2

switch(opcao){  
    case 1:
        console.log("Cadastrar usuário")
    break

    case 2:
        console.log("Listar usuários")
    break

    case 3:
        console.log("Sair")
    break

    default:
        console.log("Opção inválida")
}