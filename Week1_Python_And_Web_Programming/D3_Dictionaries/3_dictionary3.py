# Yossi, Eik, 54320, BankHapoalim, Tel Aviv

# Ben, Benji, 52343, Leumi, Raanana

account1 = {
    "First Name": "Yossi",
    "Last Name": "Eik",
    "ID": "54320",
    "Bank": "BankHapoalim",
    "Address": "Tel Aviv",
}

account2 = {
    "First Name": "Ben",
    "Last Name": "Benji",
    "ID": "52343",
    "Bank": "Leumi",
    "Address": "Raanana",
}

account3 = {
    # "First Name": "B",
    "Last Name": "Bji",
    "ID": "53",
    "Bank": "Leumi",
    "Address": "Ramat Gan",
}

accounts = [account1, account2, account3]

for account in accounts:
    first_name = account.get("First Name")
    print(first_name)
