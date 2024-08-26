#Definition: Inheritance is a mechanism in object-oriented programming 
# where a class (called a “child” or “derived” class)
#  inherits attributes and methods from another class 
# (called a “parent” or “base” class).

class Vehicle:  # Parent class representing a general category
    def __init__(self, name, speed):
        self.name = name  # Every vehicle has a name
        self.speed = speed  # Every vehicle has a speed

    def move(self):  # A common behavior for all vehicles
        print(f"{self.name} is moving at {self.speed} km/h")

class Car(Vehicle):  # Child class inheriting from Vehicle
    def __init__(self, name, speed, brand):
        # `super().__init__` calls the parent class's constructor to initialize inherited attributes
        super().__init__(name, speed)
        self.brand = brand  # Car-specific attribute

    def honk(self):  # Car-specific behavior
        print(f"{self.name} is honking!")

# Why this works:
# - `Car` inherits `name` and `speed` attributes from `Vehicle`, so we don't need to redefine them.
# - `Car` also inherits the `move` method, showing how inheritance allows code reuse.

# Usage
my_car = Car("Ferrari", 200, "Ferrari")
my_car.move()  # Inherited method
my_car.honk()  # Specific method for Car

# Inheritance: Promotes reusability and flexibility by allowing shared code across related classes.
# Tools:
# - `class`: Defines a new class.
# - `super()`: Calls methods and constructors from the parent class in a child class.
