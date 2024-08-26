# *args

def welcome(*args):
    for name in args:
        print(f'Welcome,{name}')
    print(args)

welcome('Juliana','Shira', 'Manuel', 'Alex')
welcome('Juliana',55, ['a','b','c'], 'Alex') #you can pass any type of data


def some_func(name):
    print(f'welcome, {name}')

# some_func('Juliana', 'Shira') #gets an error because is too many values

#**kwargs

def create_info(**kwargs):
    for key, value in kwargs.items():
        print(key, value)
    print(kwargs)

create_info(name = 'Juliana',age = 34, address = 'Ramat Gan', email = 'juliana@gmail.com')


