# the Dayli Challenge Week1 Day 2
# Loop and basic

print("Challenge 1")

number = int(input("Enter a number: "))
length = int(input("Enter the desired length of the list: "))
# programe that request input 
multiples_list = []

for i in range(1, length + 1):
    multiples_list.append(number * i)
# For each number in a range, add it to an empty list [ ]
print(multiples_list)

#
word = "ttppptllleeee"

letters = []

i = 0
current_character = word[i]
letters.append(current_character)

while i < len(word):

    if word[i] != current_character:
        current_character = word[i]
        letters.append(current_character)

    i += 1

# bloc here on these 