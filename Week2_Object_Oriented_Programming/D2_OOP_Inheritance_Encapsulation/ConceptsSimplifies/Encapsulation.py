class Person:
    def __init__(self, name, age):
        self.__name = name  # Private attribute
        self.__age = age  # Private attribute

    def get_name(self):
        return self.__name  # Getter method

    def set_name(self, name):
        self.__name = name  # Setter method

# Usage
person = Person("Alice", 30)
print(person.get_name())  # Access via getter
person.set_name("Bob")  # Modify via setter
print(person.get_name())

# Encapsulation: Protects internal state and controls access, ensuring data integrity and consistency.
# Tools:
# - `__` (double underscore): Makes an attribute private, hiding it from outside access.
# - `get_` and `set_` methods: Control how private attributes are accessed and modified.