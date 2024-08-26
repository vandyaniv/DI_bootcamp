def addition():
    result = 5 + 5
    return result


print("le result du calcul est :", addition())


def soustraction():
    resulat_test = 9 - 3
    return resulat_test


soustraction()
print("le resultat est:", soustraction())

# parametre et valeurs


def add(a):
    a += 1
    print(a)
    add(a)


add(2)
