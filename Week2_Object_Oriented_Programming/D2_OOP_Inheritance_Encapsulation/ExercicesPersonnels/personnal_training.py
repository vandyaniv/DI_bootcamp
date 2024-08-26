# Write a Python program that prints “Hello, World!” to the screen.
print("hello")

# Write a Python program that adds two numbers and prints the result.

a = 5
b = 10

sum_total = a + b

print(sum_total)


check = 7

if check % 2 == 0:
    print("even")
else:
    print("odd")
# just to start

# now lets continue
# Step 1: Understanding Basic Classes and Objects


class myobject:
    def __init__(self, name):
        self.name = name


my_instance = myobject("my first object")
print(my_instance.name)


class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year


my_car = Car("Toyata", "Corolla", 2010)
print(my_car.make, my_car.model, my_car.year)


# An instance is a specific object created from a class. When you create an instance, you’re building an object based on the structure and behavior defined in the class.


class Book:
    def __init__(self, title, author, page):
        self.title = title
        self.author = author
        self.page = page


my_book = Book("harry potter", "jk", "250")

# to modify the instance that mean the object created by class part


print(f"Title: {my_book.title}, Author: {my_book.author}, Pages: {my_book.page}")


class Rectangle:
    def __init__(lenght, width):
        self.lenght = lenght
        self.width = width


def area(self):
    return self.lenght * self.width


my_rectangle = Rectangle(10, 5)
print(f"My area is { Rectangle.area} ")
