/*Escreva um programa que verifique se a senha armazenada na variável senha tem pelo menos 8 caracteres. Caso positivo, exiba "Senha válida", caso contrário, exiba "Senha inválida".*/

let senha = "12345679"

if(senha.length >= 8){
    console.log("Senha valida")
}else{
    console.log("Senha invalida")
}