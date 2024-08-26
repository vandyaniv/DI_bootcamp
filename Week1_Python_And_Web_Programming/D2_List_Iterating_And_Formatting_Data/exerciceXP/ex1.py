# Exercise 1 : Favorite Numbers
# So here we creat a set with my fav number ( 1, 2,3 )
# To that i ad more two valu 
# remove last number 


my_fav_numbers = [1, 4, 6, 8, 9]
my_fav_numbers.append(11)
my_fav_numbers.append(13)
print(my_fav_numbers)

# Obtenir la valeur du dernier élément
remove_last_one = my_fav_numbers[-1]

# Utiliser remove() avec la valeur du dernier élément
my_fav_numbers.remove(remove_last_one)

print(my_fav_numbers)

# error of syntaxe the worst for the moment

#part 2
friend_fav_numbers = [3,5,4,8]

our_fav_numbers = friend_fav_numbers + my_fav_numbers
print(our_fav_numbers)

#exercice3 
#Tuples are immutable lists, which means items can’t be changed.
#But that not mean we cannot add lets see that here 

my_tuple = (1,2,3)
print(my_tuple)

addition_tuple =(4,5,6)

somme_of_tuple = my_tuple + addition_tuple
print(somme_of_tuple)

# Exercice 4 add and remove to list 
# then count 

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)

basket.remove("Blueberries")
print(basket)

basket.insert(0, 'kiwi')
print(basket)
basket.append('Apples')
print(basket)

#there is good but im sure here we can find another way im in fact using many method different that 
#can be confusion 

#next par Count how many apples are in the basket.
# i have 4 object on the list and want to count to be sure so how 
# The count() method returns the number of elements with the specified value. lets try

number_of_object = len(basket)
print("there is", number_of_object ,"fruit on my basket")

#deletion 
basket.clear()
print(len(basket))


# "'x"