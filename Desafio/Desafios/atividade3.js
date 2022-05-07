

let n = 10;
let v = [2,3,4];

function atividade3() {
  var sums = [];

  for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < v.length; j++) {
          for (let k = 0; k < v.length; k++) {
              ///// 'for' para passr por todas as combinações
              if (v[i] + v[j] + v[k] == n) {
                  sums.push([v[i], v[j], v[k]]);
              }
          }
      }
  }
  console.log(`todas as somas com o menor número de elementos são`);
  console.log(sums)
  console.log("N=10")
}

atividade3();