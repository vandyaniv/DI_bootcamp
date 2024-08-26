keys = ["Ten", "Twenty", "Thirty"]
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)


# 1 opening dict
# 2 var = familly serving

# for loop to
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    total_cost += cost
    print(f"{name} has to pay ${cost}")
print(f"Total cost for the family is ${total_cost}")


# exercice 3
# basic key
# dictionnary = { 'key' : value }
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]},
}
brand["number_stores"] = 2


print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}.")

# this is a string and inside a dictionnaruy thats right
# { "  " } = empty
brand["country_creation"] = "Spain"

# check list
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# if x in brand of y then brand x add = .append (valu )

del brand ["creation_date"]


print(brand['international_competitors'][-1])
# dictionnary { "a" "b" "c" [c1, c2,4]}

print(brand['major_color']['US'])

print(len(brand))
#print(len (count_key))

print(brand.keys())
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000
}

brand.update(more_on_zara)

print(brand['number_stores'])  


### exercice $4 
# for loop 
# index 
# list_A = ["A", "B", "C"]

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]


disney_users_A = {}

for index, name in enumerate(users):
    disney_users_A[name] = index  

print(disney_users_A)

disney_users_B = {}
# enumerate (list_user ) enumarate sequence of a list
for index, name in enumerate(users):
    disney_users_B[index] = name  

print(disney_users_B)

disney_users_A_mp = {}

for index, name in enumerate(users):
    if name[0].lower() in ["m", "p"]:  
        disney_users_A_mp[name] = index  

print(disney_users_A_mp)