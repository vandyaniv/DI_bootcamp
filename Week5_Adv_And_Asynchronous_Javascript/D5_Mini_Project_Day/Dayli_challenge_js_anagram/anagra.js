function take_me_to_anagram (){
  let isAnagramus = true ;
while (isAnagramus){ 
  let word_one = prompt('Enter the #First word:') ;
  let word_two = prompt('Enter the #Second word:') ;



  word_one = word_one.replace(/\s+/g, '').toLowerCase();
  word_two = word_two.replace(/\s+/g, '').toLowerCase();

  

  if (word_one === word_two){
    alert('Good my Friend, you enter an anagram');
  }else{
    alert("Gosh..let's try again !!");
  }
}
};

take_me_to_anagram() 
