# print done 
# import the Class -> to -> class ( Dog to Pet-class_Dog-class)
from .Exercice_XP import Dog  # Import the Dog class from one module
# may the  import like this /folder/folder/.Exercice_XP need to check to many work with
import random  # Import the random module to use random.choice

class PetDog(Dog):
    def __init__(self, name, weight, age, trained=False):
        super().__init__(name, weight, age)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        print(f"{', '.join(args)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and can't do a trick.")
        self.trained = False  
        #should be reset? Not sure, maybe.

    def get_age(self):
        if self.age > 1:
            print(f"This dog is {self.age} years old")  
        else:
            print(f"This dog is {self.age} year old")
# need to check it back 

##
# Pseudo_code : method 
# structure 
#    class
#         1 attribute : [ { } ] list_dictionnary 
#         2 attribute : (f-string ) 

#  1 attribute - methode_a = print_  [{ }]
# 2 attribute - methode_b = is_18 is valu < x then = i 
      # else if 
# personnal test just to structure the question ..( )


class Family:
    def __init__(self, last_name):
        self.last_name = last_name  
        self.members = [  #
            {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
            {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
        ]

    # Method_a: Print the details of family members
    def print_members(self):
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

    # Method_b: Check = if x : valu_ then = print 
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False


# Creating -object
my_family = Family("Doe")

# Adding a new child
my_family.members.append({'name': 'John', 'age': 0, 'gender': 'Male', 'is_child': True})


print(my_family.is_18("Michael")) 
print(my_family.is_18("John"))    

# Printing the details of the family members
my_family.print_members()  

