from tinydb import TinyDB, Query
import sys

# Nome
db = TinyDB('database/db.json')

# planilha
planilha = Query()

# Remover quando a encomenda chegar ao destinatário
db.remove(planilha.cod_encomenda == sys.argv[0])