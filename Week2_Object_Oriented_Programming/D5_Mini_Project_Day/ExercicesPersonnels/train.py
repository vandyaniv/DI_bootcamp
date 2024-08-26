# creer une calculatrice === test


# Créer la fonction addition qui retourne la somme de deux nombres
def addition(a, b):
    result = a + b
    return result  # Retourne la somme


# Appeler la fonction avec deux arguments
res = addition(3, 5)

# Afficher le résultat
print("Le résultat est", res)


def multiplicateur(a, b):
    resulat_b = a * b
    return resulat_b
s

resulat_b = multiplicateur(5, 6)
# multiplicateur(6, 7) # faut noublie pas cest la fonction que tu construit pas les instructions
# les instructions permettent de creer la fonction !!!!
print("le resultat est resultat:", resulat_b)

# ok je vais faire une fonction qui compte jusqu a 20

# def compteur(n):
# for compteurs in range (1, 20):
# if n = 0:
#  n += 1

# chaque ligne a une valeur crucial


def compteur():
    for line in range(1, 3):
        print("ceci est la ligne fois :")


# ici cela s'arrete cela veut dire tu as creer elle ne fonctionne pas encore

compteur()

# puis une fois appele elle commence a creer

# refaire - creer une fonction
# qui calcul le pourcentage
# definition pourcentage en bas :
# 40% = 40*100/100#
# produit% = x*100/100


#  produit = X_pourcent* le prix / divise par 100

# trop complexe

# si pair ou impair
#  % == 0 cela veut dire pair


def is_even(number):
    return number % 2 == 0


resultat = is_even(7)
print(resultat)


def add(a, b):
    return a + b


resulat_add = add(1, 8)
print(resulat_add)

resulat_add = add(1, 4)
print(resulat_add)


def is_long_word(word):
    return len(word) > 5


resultat = is_long_word(chat)
print(resultat)
