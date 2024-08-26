def calculation(a, b):
    add = a + b 
    sub = a - b
    return add,sub


res = calculation(40, 10)
print(res) #output: tupple with both values

add, sub = calculation(40, 10)
print(add, sub) #output: values not in a tuple