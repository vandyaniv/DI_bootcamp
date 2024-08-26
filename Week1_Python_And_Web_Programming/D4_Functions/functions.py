# print(f'hello') #print is a function

#our first function: no argument
def say_hello():
    print('Hello there!')

say_hello()

#with arguments and return

# def adv_say_hello(name):
#     return f'Hello {name}'

# print(adv_say_hello()) #print and call the function

#arguments: positional and keyword 

def adv_say_hello(name:str = 'Joe Doe', language:str = 'EN') -> str:
    '''gives a greeting depending on the language''' #doc strings

    if language == 'EN':
        return f'Hello, {name}'
    
    elif language == 'HE':
        return f'Shalom, {name}'
    
    elif language == "PT":
        return f'Oi, {name}'
    
    elif language == "ES":
        return f'Hola, {name}'
    
    elif language == "RU":
        return f'Privet, {name}'
    
    else:
        return "unknow language"
    
print(adv_say_hello('Juliana', "PT")) #positional arguments
print(adv_say_hello(language = 'PT', name = "Juliana")) #keyword arguments
print(adv_say_hello("Juliana", language = 'PT')) #mixed types of arguments: the first one has to be the positional

print(adv_say_hello("Juliana")) #default value for language = 'EN'
print(adv_say_hello("Dima", 'RU'))#if you dont need the default, you still can specify

print(print.__doc__)











