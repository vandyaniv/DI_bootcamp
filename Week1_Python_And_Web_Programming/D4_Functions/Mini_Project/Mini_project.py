def display_board(board):
    print("*********************")
    for i in range(3):
        print(
            "*   {}  |  {}  | {}   *".format(
                board[i * 3], board[i * 3 + 1], board[i * 3 + 2]
            )
        )
        if i < 2:
            print("* _____|_____|_____*")
    print("*********************")


# add x  to the valu -> [dict board -> key 0 -> valu " "]
# so here i have the board


def play():
    current_player = "X"

    for _ in range(9):
        display_board(board)
        player_input(current_player)
        winner = check_win()
        if winner:
            display_board(board)
            print(f"Player {winner} wins!")
            return
        current_player = "O" if current_player == "X" else "X"

    display_board(board)
    print("It's a draw!")


def player_input(player):
    while True:
        move = input(f"Player {player}, enter your move (0-8): ")

        if move.isdigit():
            move = int(move)
            if move in board and board[move] == " ":
                board[move] = player
                break
            else:
                print("Invalid move. Please try again.")
        else:
            print("Enter a valid number between 0 and 8.")


# check = combination valu = winn
def check_win():
    winning_combinations = [
        (0, 1, 2),
        (3, 4, 5),
        (6, 7, 8),
        (0, 3, 6),
        (1, 4, 7),
        (2, 5, 8),
        (0, 4, 8),
        (2, 4, 6),
    ]
    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != " ":
            return board[combo[0]]
    return None


board = {0: " ", 1: " ", 2: " ", 3: " ", 4: " ", 5: " ", 6: " ", 7: " ", 8: " "}


play()