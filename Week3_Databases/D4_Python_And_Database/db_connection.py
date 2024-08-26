import os
import random

import psycopg2
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database connection details
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_NAME = os.getenv("DB_NAME", "countries")
DB_USER = os.getenv("DB_USER", "elivanmak")
DB_PASSWORD = os.getenv("DB_PASSWORD", "mysecurepassword")
DB_PORT = os.getenv("DB_PORT", "5432")

# Connect to PostgreSQL
connection = psycopg2.connect(
    database=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT
)
cursor = connection.cursor()

# Fetch data from REST Countries API
countries_api = requests.get("https://restcountries.com/v3.1/all")
data = countries_api.json()

# Select 10 random countries
random_countries = random.sample(data, 10)

# Insert random countries into the random_countries table
for country in random_countries:
    name = country["name"]["common"]
    capital = country.get("capital", [None])[0]
    flag_code = country["cca2"]
    subregion = country.get("subregion")
    population = country.get("population")

    insert_query = """
    INSERT INTO random_countries (name, capital, flag_code, subregion, population)
    VALUES (%s, %s, %s, %s, %s)
    """
    cursor.execute(insert_query, (name, capital, flag_code, subregion, population))

# Commit the transaction and close the connection
connection.commit()
cursor.close()
connection.close()

print("10 random countries have been inserted into the random_countries table.")
