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

# print(letters)


word = "ttppptllleeee"
current_character = ""
letters = []

for i in range(len(word)):

    if current_character != word[i]:
        current_character = word[i]
        letters.append(current_character)

# print(letters)

word = "ttppptllleeee"
result = ""
current_character = ""

for i in range(len(word)):
    if current_character != word[i]:
        current_character = word[i]
        result += word[i]

# print(result)


word = "ttppptllleeee"
result = word[0] # t

for i in range(len(word)):
    if result[-1] != word[i]:
        result += word[i]

print(result)
