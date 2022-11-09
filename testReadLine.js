/*  1-Inicie o node
    npm init - y
      O -y significa que você dirá sim para todas as aplicações
      deve ser gerado um arquivo packege.json*/
/*  2-Instale no terminal o readline-Sync:
    npm install readline-sync
      Deve ser criado uma pasta node_modules*/
/*  3-Importe para utilizar na aplicação
    const readline = require('readline-sync')*/
/*  4- Para salvar o input precisamos colocar dentro de uma aplicação
    const nomeAluno = readline.question('Nome de aluno ')*/

//EXEMPLO
const readLine = require('readline-sync');

let nomeUsuário = readLine.question("Qual seu nome? ")

if (!nomeUsuário) {
  console.warn('Eu preciso saber seu nome!')
  return
}

console.log(`Olá! ${nomeUsuário}`)