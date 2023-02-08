from tinydb import TinyDB, Query
import sys

# Nome
db = TinyDB('database/db.json')

# planilha
planilha = Query()

# update planilha
dataFull = sys.argv[1]
cod = sys.argv[2]
splitData = dataFull.split(", ")
lastDate = splitData[0]
lastHour = splitData[1]

db.update({'cod_encomenda': cod}, planilha.lastDateAtt == lastDate, planilha.lastHourAtt == lastHour)

print(f'Hora de atualização do {cod} atualizada!')