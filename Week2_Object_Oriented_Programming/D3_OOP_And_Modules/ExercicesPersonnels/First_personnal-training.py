class Currency:
  def __init__(self, currency,amount):
   self.currency = currency
   self.amount = amount

  # to print the attribute should an object 
  def describe_class(self):
    return print(f"this call {self.currency} attribute of class {self.amount} ")


c1 = Currency ('dollar', 5)
C1 = Currency ('shekel', 10)


print(c1.currency)

# exercice 2
# lets continue another exe;ple

class Book:       # self - attribute_1- tile = 2 author 
  def __init__(self, title, author,page):
   self.title = title # attibute1
   self.author = author
   self.page = page

#self.attribute_name = value.

# instance - is a string of class on other word the object from 
Book1 = Book ("198", "George Orwell", 329)

print(Book1.title)
print(Book1.author)
print(Book1.page)


class Car:
  def __init__(self,make,model,year):
    self.make = make
    self.model = model 
    self.year = year

car_instance = Car ("1", "2", "3")
print(car_instance.make)
print(car_instance.model)
print(car_instance.year)

class Perso:
  def __init__(self,age,name,last_name):
    self.age = age 
    self.name = name
    self.last_name = last_name

#instance of same class - different attribut from that
instance_1 = Perso ("1", "2",3 )
instance_2 = Perso ("a", "b", 3)
instance_3 = Perso ("a1","b2", 3)


print(instance_1.name)
print(instance_2.name)
print(instance_3.name)

# another exercice 
# creater a rectangle 

#class rectangle:
 # def __init__(self,a,b,c,d):
 #   self.a = a
 #   self.b = b
 #   self.c = c
  #  self.d = d

#instance_a
#instance_b
#instance_c
#instance_d

# ok that not a good way and after what 

#class rectangle:
 # def __init__(self,length,width):
  #  self.length =length
   # self.width = width
  
#instance_lenght = rectangle.length (25)
#instance_widht = rectangle.width(10)

#area = rectangle_lenght * rectangle.width
 

     # anther mistake

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

# Creating an instance of Rectangle
rect = Rectangle(25, 10)

# Accessing and printing the attributes
print("Length:", rect.length)  # Output: Length: 25
print("Width:", rect.width)    # Output: Width: 10


dir(list)
print(dir)