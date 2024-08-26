print(" exercice :")


class Pets(): 
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese (Cat):
  def sing(self, sounds):
    return f"{sounds}"

bengal_cat = Bengal("Simon", 3) # is this Valu of the string but the object that i try to cat 
chartreux_cat = Chartreux("Luna", 4)
siamese_cat = Siamese("Felix", 2)


all_cats = (bengal_cat, chartreux_cat, siamese_cat)
# here we call the object with the valu ( a, b , c , ect ) from the class an object from other
sara_pets = Pets(all_cats) 


sara_pets.walk()

# basic are low need to focus on working on that 
print("  ")
print(" D O N E  :")
print(" exercice 2:")

class Dog:
  def __init__(self,name, weight, age):
    self.name = name 
    self.weight = weight
    self.age = age 
  def bark(self):
        return f"{self.name} is barking!"

  def run_speed(self):
        return self.weight / self.age * 10

  def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if my_power > other_power:
            return f"{self.name} winxs the fight!"
        else:
            return f"{other_dog.name} wins the fight!"



dog1 = Dog("Rex", 3, 20)
dog2 = Dog("Max", 5, 25)
dog3 = Dog("Rocky", 2, 30)


# print done 
# import the Class -> to -> class ( Dog to Pet-class_Dog-class)




