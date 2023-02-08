# Acompanhador de encomendas

Um aplicativo que permite criar, gerenciar e apagar clientes. Além de enviar mensagens com atualizações da localização da encomenda.

#### OBS: O projeto NÃO irá funcionar. Foram tiradas partes do código para manter chaves privadas e dados (número de telefone e códigos de rastreio) em particular.

## Stack utilizada

**Back-end:** Node, Python

**Banco de dados:** TinyDB


## Screenshots

#### Envio de mensagem bem-sucedido!

![Screenshot_1](https://user-images.githubusercontent.com/99875876/217393242-413d3b15-41b6-4ed3-9d31-7ecb0503ab47.png)

#### Código inválido

![Screenshot_2](https://user-images.githubusercontent.com/99875876/217393343-12163aa1-0d6c-4003-b915-4f38cc9db787.png)

#### Código válido

![Screenshot_3](https://user-images.githubusercontent.com/99875876/217393322-09f49932-b519-440c-ba00-c561c715ee6b.png)

## Documentação

#### Estrutura base de dados:

| Parâmetro      | Tipo       | Descrição                           |
| :------------- | :--------- | :---------------------------------- |
| `client_number`| `number`   | **Obrigatório.** WhatsApp do cliente|
| `cod_encomenda`| `string`   | **Obrigatório.** Código correios    |
| `lastDateAtt`  | `date`     | **Automático.** Dia da última atualização|
| `lastHourAtt`  | `time`     | **Automático.** Hora da última atualização|

#### Como a estrutura é usada

[![](https://mermaid.ink/img/pako:eNqFkUFPwzAMhf-K5dOQtnHvAWldgU0ChAS3tAer8dogmkRpKpia_nfSFjQkYOSU-L3v2Yp7LI1kTLByZGt4znIN8WzEXkt-X7-0BaxWV-GOHUiSpoXN4z5AuiCrMvIUDRe_EvANydIA24VjkhE-Eenky_rSNJYcf8YNs7g9J_4oT-adGJ-XO-MIpDqwY-25LWbkD3ECr8VbTb4la8fp__ffiM5K8ry2x-LcQOEUoaqOVBvgVjyQpEjhEht2DSkZ_74fU3L0NTecYxKvr6qqfY65HqKROm-ejrrExLuOlzh3zxTFnTVfRZbKG3c_L7M0-qAqHD4AI9-cjg?type=png)](https://mermaid.live/edit#pako:eNqFkUFPwzAMhf-K5dOQtnHvAWldgU0ChAS3tAer8dogmkRpKpia_nfSFjQkYOSU-L3v2Yp7LI1kTLByZGt4znIN8WzEXkt-X7-0BaxWV-GOHUiSpoXN4z5AuiCrMvIUDRe_EvANydIA24VjkhE-Eenky_rSNJYcf8YNs7g9J_4oT-adGJ-XO-MIpDqwY-25LWbkD3ECr8VbTb4la8fp__ffiM5K8ry2x-LcQOEUoaqOVBvgVjyQpEjhEht2DSkZ_74fU3L0NTecYxKvr6qqfY65HqKROm-ejrrExLuOlzh3zxTFnTVfRZbKG3c_L7M0-qAqHD4AI9-cjg)


  apiData recebe valores de uma API não-oficial dos Correios, onde é consultado sua data e hora da última atualização.
  
  readData recebe valores da base de dados (arquivo .json), onde também é consultado a data e hora da última atualização.
  
  compareData é responsável por comparar e dar o resultado: iguais ou não. Caso eles sejam iguais, nada será feito. Mas, caso eles sejam diferentes, whatsapp.js e update.py são acionados.
  
  whatsapp.js é responsável por enviar as mensagens para o WhatsApp dos clientes através da biblioteca wppjs whatsapp-web.js.
  
  update.py é responsável por atualizar a base de dados com os novos dados adquiridos através da apiData.

#### Adição de dados (addData.py):

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `number`      | `number` | **Obrigatório**. Número de WhatsApp         |
| `codigo`      | `string` | **Obrigatório**. Código da encomenda        |
| `lastDateAtt` | `date`   | **Automático**. Via API.                    |
| `lastHourAtt` | `time`   | **Automático**. Via API.                    |



#### Envio de mensagens (whatsapp.js(arrNumber, arrCod, arrSubStatus)):

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `arrNumber`      | `array` | **Automático**. Via index.js |
|`arrCod`          | `array` | **Automático**. Via index.js|
| `arrSubStatus`   | `array` | **Automático**. Via index.js|

