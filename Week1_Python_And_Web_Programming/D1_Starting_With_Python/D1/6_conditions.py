username = "Ben"
password = "111"
# BOB

if (
    username == "Yossi" and password == "123"
):  # and - all the conditions need to be True
    # to return True
    print("Yossi, Management Section")
elif (
    username == "BOB" or password == "111"
):  # or - needs at least 1 condition to be True
    # to return True
    print("BOB is restricted")
else:
    print(f"{username}, Client Section")
