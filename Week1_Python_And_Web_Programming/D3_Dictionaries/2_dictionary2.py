# Removing from dictionaries

a_dict = {"A": 1, "B": 2, "C": 3}

number = a_dict.pop("C")  # remove the key of 'C' and returns its value (3)

print(number)

last_item = a_dict.popitem() # removes the last added item and returns it as a tuple(key, value)

print(last_item)

print(a_dict)

del a_dict["A"] # Deletes the specified key and its value, doesn't return anything

print(a_dict)

