# Dictionary stores key and value pairs
# "Dog"[KEY] - "Human best friends"[VALUE]
# Dictionaries dont have index - they use keys instead


a_dict = {
    "Dog": "Human best friends",
    1: 1022,
    (1, 2, 3): "a",
    "details": [
        12,
        3,
        34,
    ],
}
# key  :  Value
# key has to be immutable (int, string, tuple) - not changeable
# value can be any type of data

# Access, Modify, Delete

# ACCESS

print(a_dict["Dog"])  # Gets the value of the key "Dog"
print(a_dict["details"])

print(a_dict.keys())  # only keys
print(a_dict.values())  # only values


for key in a_dict:  # looping through the D's keys
    print(key)
    print(a_dict[key])


for value in a_dict.values():  # looping through the D's values
    print(value)


b_dict = {"A": 10, "B": 10}

print(b_dict)

c_dict = {"A": 10, "A": 20}  # dictionaries have single unique keys (no duplicates)

print(c_dict)


# looping through the keys and values at the same time
for key, value in a_dict.items():
    print(f"Key: {key}, Value: {value}")

print_this = True
for key, value in a_dict.items():
    if print_this:
        print(f"1. Key: {key}, Value: {value}")
        print_this = False
        continue
    print_this = True
