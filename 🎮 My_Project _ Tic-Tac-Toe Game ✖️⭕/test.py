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

                  
      
        

    