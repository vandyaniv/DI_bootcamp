info1 = {
    "First Name": "Yossi",
    "Last Name": "Eik",
}

info2 = {
    # "Last Name": "Benji",
    "ID": "54320",
    "Bank": "BankHapoalim",
    "Address": "Tel Aviv",
}

info1.update(info2) # extends info1 with new keys and values, 
    #                   and also overwrites common keys

print(info1)
