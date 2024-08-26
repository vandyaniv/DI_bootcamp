matrix = [
    ["7", "i", "i"],
    ["T", "s", "x"],
    ["h", "%", "?"],
    ["i", " ", "#"],
    ["s", "M", " "],
    ["$", "a", " "],
    ["#", "t", "%"],
    ["^", "r", "!"],
]

decoded_message = ""
rows = len(matrix)
cols = len(matrix[0])

for col in range(cols):
    for row in range(rows):
        if matrix[row][col].isalpha():
            decoded_message += matrix[row][col]
        else:
            if decoded_message and decoded_message[-1] != " ":
                decoded_message += " "

decoded_message = " ".join(decoded_message.split())
print(decoded_message)

### nottt me just checking
