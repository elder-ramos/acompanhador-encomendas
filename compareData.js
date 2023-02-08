// Comparar dados API e JSON
async function comparar(arrCod, arrAttJSON, arrAttAPI, arrNumber, arrSubStatus, arrStatus){

  const { PythonShell } = require('python-shell')

  // Criar arrays que vão ser atualizados
  const newCod = []
  const newAttAPI = []
  const newNumber = []
  const newSubStatus= []

  let len = await arrCod.length
  for(let i = 0; i < len; i++){
    if(arrAttJSON[i] == arrAttAPI[i]){
      return null
    }else{
      if(arrStatus[i] == 'Objeto entregue ao destinatário'){
        let options = {args: [arrCod[i]]}
        PythonShell.run("deleteData.py", options, (err) =>{
          if (err){console.log('Erro PythonShell - ' + err)}})
      }if(arrStatus[i] == 'Objeto encaminhado'){
        newCod.push(arrCod[i])
        newAttAPI.push(arrAttAPI[i])
        newNumber.push(arrNumber[i])
        newSubStatus.push(arrSubStatus[i])
        // python shell options
        let options = {args: [arrAttAPI[i], arrCod[i]]}   
        // python update db
        PythonShell.run("updateData.py", options, (err, res) =>{
          if (err){console.log('Erro PythonShell - ' + err)}
          else{console.log(res)}})
      }else{
        // JUNTAR STATUS + SUBSTATUS
        newCod.push(arrCod[i])
        newAttAPI.push(arrAttAPI[i])
        newNumber.push(arrNumber[i])
        newSubStatus.push(`${arrStatus[i]},${arrSubStatus[i]}`)
        // python shell options
        let options = {args: [arrAttAPI[i], arrCod[i]]}   
        // python update db
        PythonShell.run("updateData.py", options, (err, res) =>{
          if (err){console.log('Erro PythonShell - ' + err)}
          else{console.log(res)}})
      }
    }
  }
  return [newCod, newAttAPI, newNumber, newSubStatus]
}
    // return [number, cod, attAPI, subStatus]
    // }}

module.exports = {comparar}