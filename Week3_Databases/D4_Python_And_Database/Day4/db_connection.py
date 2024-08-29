import os
import json
import psycopg2
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve connection details from environment variables
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_PORT = os.getenv("DB_PORT")

# Connect to the PostgreSQL database
try:
    connection = psycopg2.connect(
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
    )
    cursor = connection.cursor()

    # Retrieve data from the REST Countries API
    countries_api = requests.get("https://restcountries.com/v3.1/all")
    data = countries_api.json()

    # Save the first country's data into a JSON file
    file_name = "first_country.json"
    with open(file_name, "w") as json_file:
        json.dump(data[0], json_file, indent=4)

    # Optionally: Print the name of the first country for verification
    print(f"First country name: {data[0]['name']['common']}")

except Exception as error:
    print(f"Error connecting to the database: {error}")
finally:
    # Close the database connection
    if connection:
        connection.close()
        print("PostgreSQL connection is closed")