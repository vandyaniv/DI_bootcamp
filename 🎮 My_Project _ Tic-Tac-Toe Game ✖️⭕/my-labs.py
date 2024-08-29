def print_board(board):
    print("*********************")
    #make for loops to print the rows not manually
    print("*   {}  |  {}  | {}   *".format(board[0][0],board[0][1],board[0][2]))
     
    print("* _____|_____|_____*".format(board[1][0],board[1][1],board[1][2]))

    #line 2 breakline row%2==0
    print("*   {}  |  {}  | {}   *".format(board[0][0],board[0][1],board[0][2]))
    #line 3
    print("* _____|_____|_____*".format(board[1][0],board[1][1],board[1][2]))  
    
    #line 4 breakline
    print("*   {}  |  {}  | {}   *".format(board[0][0],board[0][1],board[0][2]))
    print("*********************")
     
board = [[' ','O','X'],['X','O','X'],['X','O','X']]

print_board(board)


# so here i have the board 
