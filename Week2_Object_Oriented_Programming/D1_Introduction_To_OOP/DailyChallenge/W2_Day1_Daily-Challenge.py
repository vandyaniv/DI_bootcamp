class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}  # Initialize an empty dictionary to store animals and their counts

    # this method add new animal into animal
    # the right logic : how -> it's a list - to add to list.app(to the valu )
    def add_animal(self, animal, count=1):
        if animal in self.animals:  # Check if the animal is already in the list
            self.animals[animal] += count  # Increment the count if the animal exists
        else:
            self.animals[animal] = count  # Add the animal with the given count if it's not already in the list

    # def method to list data 
    # if x in y += to list 
    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():  # Loop through the animals and their counts
            info += f"{animal} : {count}\n"
        info += "\n    E-I-E-I-O!\n"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())  # Return a sorted list of animal types

    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_list = ", ". join([f"{animal}s" for animal in animal_types])  # Join the animal types into a single string with "s" added
        return f"{self.name} farm has {animal_list}."

# here the object 
macdonald = Farm("McDonad")

# Adding here the output 
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Print the farm's information
print(macdonald.get_info())


print(macdonald.get_short_info())