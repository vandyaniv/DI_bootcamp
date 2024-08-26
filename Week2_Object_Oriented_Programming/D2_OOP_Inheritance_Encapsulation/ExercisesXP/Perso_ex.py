# here to understant the cours 

#Understand the basics of creating a 
# class and how inheritance works in Python.

class Animal:
  def __init__(self, name):
    self.name = name

#	•	Instruction: Create a class called Dog that inherits from Animal. 
# Add a method speak() that prints “Woof!”.

class Dog(Animal):
  def speak(self):
   print("woofs !")

  #	•	Instruction: Create an instance of the
  #  Dog class, set its name to “Buddy”, and call the speak() method.

My_dog = Dog("buddy")
print(f"my dogs name is {My_dog.name}")
My_dog.speak()

# create a class with personnal and private attribut

class person:
  def __init__(self, name, age):
   self.name = name 
   self.__age = age 
  
  def display_info(self):
    print(f"Name : {self.name} age: {self.__age}")

p = person ("alice", 30)
  
print(p.name)

print(_p.__age)

p.display_info()
  

class Parent:
    def __init__(self, name):
        self.name = name
        print(f"Parent initialized with name: {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Call the Parent class's __init__ method
        self.age = age
        print(f"Child initialized with name: {self.name} and age: {self.age}")

def show_info(self):
    super().show_name()  # Call the Parent class's show_name method
    print(f"Age: {self.age}")




