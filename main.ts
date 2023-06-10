let notas:number[];

notas=[7,6,8,5,9,10]

function notasavg(){
  let result = notas.reduce(
    (accumulator , currentValue) =>accumulator+currentValue,
  )
console.log(result/6)
}
notasavg()