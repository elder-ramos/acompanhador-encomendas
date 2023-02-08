// function fetch api.
async function api(cod){
    const fetch = require('node-fetch')
    const apiResponse = await fetch(`>>API<<${cod}`)
    const data = await apiResponse.json()
    return data
}

// rodar api e pegar dados
async function doAPI(cod){
    // pegar API
    const dataAPI = await api(cod)
    // Dados API formatação igual ao JSON
    const attAPI = `${dataAPI.eventos[0].data}, ${dataAPI.eventos[0].hora}`
    const subStatus = dataAPI.eventos[0].subStatus
    const status = dataAPI.eventos[0].status
    // pegar código por código e jogar para comparação
    // puxar função
    return [attAPI, subStatus, status]
}
    

module.exports = {doAPI}