function wppMsg(arrNumber, arrCod, arrSubStatus){

  const { Client, LocalAuth } = require('whatsapp-web.js');
  const qrcode = require('qrcode-terminal')
  
  const client = new Client({
    authStrategy: new LocalAuth()
  })

  // First session qr code
  client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true})
  })

  client.on('ready', async (i = 0, len = arrCod.length) =>{
    console.log('client is ready');
    // Loop while nas arrays.
    while (i < len) {
      const status = arrSubStatus[i]
      const strStatus = status.toString().split(',')
      const origem = strStatus[0]
      const destino = strStatus[1]

      console.log(`Cliente do código ${arrCod[i]} recebeu a mensagem`)

      const clientNumber = arrNumber[i]
      const clientSerialized = `${clientNumber}@c.us`
      client.sendMessage(clientSerialized, `*Atualização da encomenda!*\n
      código de rastreio: ${arrCod[i]}\n\n
       _${origem}_\n
       _${destino}_`)
      i++
    }
})
  client.initialize();
}

module.exports = {wppMsg}