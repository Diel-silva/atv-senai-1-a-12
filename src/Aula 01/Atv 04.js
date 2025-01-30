/*Utilize a estrutura switch para verificar a variável dia e exibir o nome do dia correspondente:
1: "Domingo"
2: "Segunda-feira"
3: "Terça-feira"
4: "Quarta-feira"
5: "Quinta-feira"
6: "Sexta-feira"
7: "Sábado"
Caso não seja nenhum dos valores acima, exiba "Dia inválido". */

let dia = 8

switch(dia){
    case 1:
        console.log("Domingo")
    break

    case 2:
        console.log("Segunda")
    break

    case 3:
        console.log("Terça")
    break

    case 4:
        console.log("Quarta")
    break

    case 5:
        console.log("Quinta")
    break

    case 6:
        console.log("Sexta")
    break

    case 7:
        console.log("Sabado")
    break

    default:
    console.log("Dia invalido")

}