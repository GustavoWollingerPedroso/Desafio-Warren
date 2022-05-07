const terminal=require('readline-sync');


console.log("digite o quanto os cinco alunos chegaram antes ou depois do horário ")
Chegou = [parseInt(terminal.prompt()), parseInt(terminal.prompt()), 
     parseInt(terminal.prompt()), parseInt(terminal.prompt()), parseInt(terminal.prompt())];
     Alunos = 5


startClass(Chegou, Alunos)


function startClass(Chegou, Alunos) {
   let start = Chegou.filter((item) =>{
        return item <= 0
   })
    start.length >= Alunos-2? console.log("Aula normal") : console.log("Aula cancelada")   
}


//A tolerancia de faltas neste caso é dois por isso Alunos-2 na declaração do 'if'


