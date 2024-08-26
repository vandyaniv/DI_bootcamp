import os
import psycopg2
from dotenv import load_dotenv

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

# Récupérer les détails de la connexion depuis les variables d'environnement
HOSTNAME = os.getenv('HOSTNAME')
USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')
DATABASE = os.getenv('DATABASE')

# Se connecter à la base de données PostgreSQL
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)

# Créer un curseur pour exécuter des commandes SQL
cursor = connection.cursor()

# Par exemple, vous pouvez exécuter une requête pour vérifier la connexion
cursor.execute("SELECT version();")
db_version = cursor.fetchone()
print(f"Connected to - {db_version}")

# Fermer la connexion
cursor.close()
connection.close()