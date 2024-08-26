students = ['Harry', 'Hermione', 'Ron', 'Luna']

students[1] = 'Chow'
print(students)

# def wizard(names_list:list):
#     greeting = []
#     for name in names_list:
#         greeting.append(f'{name} welcome to Hogwards!')
    
#     return greeting
    
# print(wizard(students))
# print(students) #it doesn't change the original list

def selector_heat():
    for i, name in enumerate(students):
        # students[1] = 'Chow'
        students[i] = f'{name}, you are Griffyndor!'

#lists, dictionaries and sets are mutable, so you can change it in the local scope
    
selector_heat()
print(students)

name = 'Avner' #global scope

def say_hi(name):
    name = 'Juliana' #local scope
    return name

print(say_hi(name))
print(name)

#global
count = 10

def calculation(a,b):
    global count
    result = a+b
    count += result
    return count

print(calculation(5,15))
