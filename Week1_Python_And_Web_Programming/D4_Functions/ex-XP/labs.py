# Étape 1 : Utilise 'def' pour définir une fonction
def describe_city(city, country="France"):  # Étape 2 : Nomme la fonction et ajoute les paramètres
    # Étape 4 : Corps de la fonction (le code à exécuter)
    print(f"{city} est en {country}.")  # Utilise les paramètres pour afficher une phrase

# Étape 5 : Appelle la fonction avec des arguments spécifiques
describe_city("Reykjavik", "Islande")  # Appelle la fonction avec 'Reykjavik' pour 'city' et 'Islande' pour 'country'

# Appelle la fonction avec la valeur par défaut pour 'country'
describe_city("Paris")  # Appelle la fonction avec 'Paris' pour 'city' et utilise la valeur par défaut 'France' pour 'country'


describe_city("marseille")