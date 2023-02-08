async function runIndex(){
    // readData, apiData, compareData, whatsapp
    const readJSON = require('./readData.js')
    const readAPI = require('./apiData')
    const compareData = require('./compareData.js')
    const whatsapp = require('./whatsapp.js')

    // JSON
    const jsonData = readJSON.jsonData()
    const arrCodJSON = jsonData[0]
    const arrAttJSON = jsonData[1]
    const arrClientNum = jsonData[2]

    const arrAttAPI = []
    const arrSubStatus = []
    const arrStatus = []

    // Rodar API e puxar dados
    let len = arrCodJSON.length
    for(let i = 0; i < len; i++){
        const dataAPI = await readAPI.doAPI(arrCodJSON[i])
        arrAttAPI.push(dataAPI[0])
        arrSubStatus.push(dataAPI[1])
        arrStatus.push(dataAPI[2])
    }

    // Comparar dados API x JSON
    const compare = await compareData.comparar(arrCodJSON, arrAttJSON, arrAttAPI, arrClientNum, arrSubStatus, arrStatus)

    // Se tiver dados
    if(compare != null){
    // Enviar mensagem para whatsapp
        whatsapp.wppMsg(compare[2], compare[0], compare[3])
    }}
runIndex()