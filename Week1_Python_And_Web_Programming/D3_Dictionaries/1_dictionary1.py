# Modifing dictionaries

a_dict = {}

# Adding to dict

a_dict["Address"] = "Tel Aviv"
# key               # Value

age = 32

a_dict["Age"] = age

print(a_dict)

new_key = 100
new_value = 2000

a_dict[new_key] = new_value

print(a_dict)

# Adding to an existing key
a_dict["Age"] = 40  # Oerwrites the previous value


a_dict["Numbers"] = [1, 2, 3, 4, 5]

numbers = a_dict["Numbers"] # numbers are a reference to the value in "Numbers" key
                            # numbers are not a copy, but are the actual value 
print(numbers)

numbers[0] = 100
numbers[-1] = "BBB"
print(numbers)
print(a_dict)

numbers_copy = a_dict["Numbers"].copy()

numbers_copy[0] = 843723472384

print(numbers_copy)
print(a_dict)