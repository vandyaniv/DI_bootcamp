#rows = 6  
#cols = 6   

#a = []
#for x in range(rows):
 #   a.append(["x"] * cols)
    
#for row in a:
   # print(" ".join(row))
    
# a * b = basically here i multiply a by b now what i can is 
# def = function that make it easy 
# here its not the final miss a lot but i want to try just test

#other way to try 


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
     
    print_board(board)
#add check win function
#add make turn function(board,row,col,player)
def main(board):
  #board = [[' ','O','X'],['X','O','X'],['X','O','X']]
   #   print_board(board)
    board = {0: '',1:'',2: '',3: '',4:'',5: '',6: '',7: '',8:'', }
   
  answer = int(input('choose a row and column').replace('',''))
   
  board [answer] = 'x'
   
main('')

def checker():
      if board [0] == 'x' and board[1] == 'x' and board[2] == 'x':
        # user a or b = won 
        if board [3] == 'x' and board[4] == 'x' and board[5] == 'x':
                  # user a or b = won 
          if board [6] == 'x' and board[7] == 'x' and board[8] == 'x':
                    # user a or b = won 
            if board [6] == 'x' and board[4] == 'x' and board[2] == 'x':
              #
              if board [0] == 'x' and board[4] == 'x' and board[8] == 'x':
                #
                if board [1] == 'x' and board[4] == 'x' and board[7] == 'x':
                  print(checker)
                  
      
        
   checker()
    
       #while True:
        #print("Enter the row and column to place the mark:")
        #row,col=map(int,input().split())
        #add here the logic to check if the row and column are valid
        #add to check whos turn it is
        #add check for tie (after 9 plays)
        #board[row][col]='X'
        #print_board(board)






