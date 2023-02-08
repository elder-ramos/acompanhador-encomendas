// Read JSON data - local db
function jsonData(){
  const fs = require('fs')

  // Get JSON Data
try {
  const data = fs.readFileSync('./database/db.json', 'utf-8')
  let usersJSON = JSON.parse(data)
  let dataUsers = usersJSON._default

  var users = Object.entries(dataUsers)
  var arrCodJSON = []
  var arrLastAttJSON = []
  var arrClientNum = []

  users.forEach((element) => {
      arrCodJSON.push(element[1].cod_encomenda)
      arrLastAttJSON.push(`${element[1].lastDateAtt}, ${element[1].lastHourAtt}`)
      arrClientNum.push(element[1].client_number)
  })
} catch (error) {
  console.log('Oops! ' + error)
}
return [arrCodJSON, arrLastAttJSON, arrClientNum]
}

module.exports = {jsonData}