

document.getElementById('button_submit').addEventListener('click', 

  function names(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const last_name = document.getElementById('last').value;
    // const button_submit = document.getElementById('button_submit').value;

    const submit_dat = {
      name : name,
      last_name : last_name,
    };
    let jsonString =  JSON.stringify(submit_dat);
console.log(jsonString) // we will ne see  nothing like that 


let result = document.getElementById('result').textContent = jsonString;

    
  });

//Send the data to another HTML file and display the sent data to a section tag, using the DOM.
//#recieving
// ex Ninja not finish

// const par_url = new par_url_link(window.location.search)
// const name = par_url_link.getElementById('name')

// document.getElementById('name').innerHTML