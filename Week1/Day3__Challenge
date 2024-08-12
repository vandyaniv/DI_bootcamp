# lets start 

#input
word = input("Enter a word: ")

letter_dict = {}
#empty dict use to stock 
for index, letter in enumerate(word):
    if letter in letter_dict:
        letter_dict[letter].append(index)  
    else:
        letter_dict[letter] = index  

print(letter_dict)

# D_Challenge 
#


items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

wallet_amount = int(wallet.replace("$", "").replace(",", ""))

affordable_items = []

for item, price in items_purchase.items():
    price_value = price.replace("$", "").replace(",", "")  
    if price_value <= wallet_amount:
        affordable_items.append(item)
# for item should be work !!
affordable_items.sort()

if not affordable_items:
    print("Nothing")
else:
    print(affordable_items)
