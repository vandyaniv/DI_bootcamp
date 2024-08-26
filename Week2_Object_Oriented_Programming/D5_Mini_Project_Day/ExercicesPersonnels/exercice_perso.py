# les boucles 
 # I) exo sur les loop, boucles 
   # I_a : foor 
print("valeur de depart numero -> 1")
print("valeur de depart numero -> 2")

print("valeur de depart numero -> ")
print("valeur de depart numero -> 3")



print("valeur de depart numero -> 4")
print("valeur de depart numero -> 5")

# Signification > Pour une valeur de depart (1), jusqu'a une valeur d'arrive (5)

for numero_client in range(1, 6):
  print(" vous etes le client numero :", numero_client )



# for each 


    # I_b: while 

  

# II ) Les fonctions :
# 
#      definir ce que fais une fonction avant de commencer 


# premere function                                                                     
def welcome ():
  print("Bienvenue sur ma chaine Youtube") # ceci est une instruction                            ______________ 
  resultat = 19 + 6                                                                         # BLOC INSTRUCTION
  print("le reusultat est :", resultat) # en voici une autre                                  __________________

welcome() # toujours appeler la function 

# Autre function 


def next_year():
  global year
  print("Fin de lannee", year)
  year += 1 
  print("debut de l'annee", year)

year = 2018  # stocker une annee une exmple 
next_year()
next_year()
# fonction ici juste ajoute une annne 

next_year()
### autre forme de fonction 


def max (a, b):
  if a > b:
   return a
  else:
    return b


first_value = int(input("Entrer la valeur de a (la premiere)"))
segond_value = int(input("Entrer la valeur de b (la deuxieme)"))

print("La valeur max est", max(first_value, segond_value))

#III) Les class 



#IV) les objects OOP #



