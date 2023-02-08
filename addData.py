from tinydb import TinyDB, Query
import os
from time import sleep
from requests import get

# Nome
db = TinyDB(os.path.abspath('database/db.json'))

# planilha
planilha = Query()

#endpoint api
api = ''
# Adicione a API para o programa funcionar.

#Função add clientes
def addClient():
    number = input('Número do cliente (55 + ddd + numero *sem 9*): ')
    print('Número gravado como '+ number)
    codigo = input('Código do pacote:')
    response = get(api + codigo)
    
    if(response.status_code == 200):
        # Caso NÃO tenha o mesmo código de rastreio na db
        if not (db.search(planilha.cod_encomenda == codigo)):
            dados = response.json()
            # Tiver pelo menos uma atualização
            if(dados['quantidade'] > 0):
                dia = dados['eventos'][0]['data']
                hora = dados['eventos'][0]['hora']
                # Dados na base de dados
                db.insert({'client_number': number, 'cod_encomenda': codigo, 'lastDateAtt': dia, 'lastHourAtt': hora})
                sleep(5)

            else:
                print('Aguarde antes de adicionar um código sem atualizações!')
                sleep(5)
                return

        else:
            print('Ops! Código já cadastrado no sistema.')
            sleep(5)
            return
    # ERRO
    else:
        print('Ops! Erro ' + str(response.status_code))
        print('Verifique se o código está correto. Caso o erro persista tente novamente mais tarde.')
        sleep(5)
        return
    

# Remove client
def removeClient():
    print(db.all())
    cod = input('Quais encomendas você deseja remover? (separadas por vírgula) \n')
    db.remove(planilha.cod_encomenda == [cod])
    print(db.all())
    sleep(5)
    return

choose = input('Opções:\n 1- Adicionar cliente \n 2- Remover Cliente \n 3- Sair \n')
match choose:
    case '1':
        addClient()
    case '2':
        removeClient()
    case '3':
        exit()

