/** fetch */
/** Async / Await */
/** 
fetch(URL, options)
*/

let URL = "https://jsonplaceholder.typicode.com/users";

// let response = fetch(URL);
// console.log(response);
/**
 * response.json()
 * response.text()
 */
// XML - 'https://zivuch.github.io/emails.xml'

let userinfo = {
  email: "jjj@gamil.com",
  password: "123456",
};
/**
{
method: "POST", // *GET, POST, PUT, DELETE, etc.
mode: "cors", // no-cors, *cors, same-origin
cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
credentials: "same-origin", // include, *same-origin, omit
headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: "follow", // manual, *follow, error
referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data), // body data type must match "Content-Type" header
}
 */
// let options = {
//   method: "POST", // GET, POST, PUT, DELETE, PATCH ,
//   headers: {
//     "content-type": "application/json",
//     "access-token": "hdfg7 9764316 437sadfs aartartgerg",
//   },
//   body: JSON.stringify(userinfo),
// };

const fetchUsers = (e) => {
  console.log(e.target);
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      render(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const fetchOneUser = (e) => {
  e.preventDefault();
  // let id = document.getElementById('userid').value
  let id = e.target.userid.value;
  // console.log(e.target.userid.value);
  fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      render(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const addPost = (e) => {
  e.preventDefault();
  let userId = e.target.userid.value;
  let title = e.target.title.value;
  let body = e.target.body.value;
  console.log(userId, title, body);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userId, title, body }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("root").innerHTML = `<div>
      <h2>${data.title}</h2>
      <p>${data.body}</p>
      <p>${data.id}</p>
      </div>`;
      // render(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const addMyName = (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let username = e.target.username.value;

  fetch("https://users-18kl.onrender.com/userjson", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, username }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      render(data.filter((item) => item.id > 13));
    })
    .catch((e) => {
      console.log(e);
    });
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.name}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

/**
1. Create an HTML form in your index.html file with inputs for name, 
username, and email, and a submit button.
2. When the form is submitted, send a POST request to 
https://users-18kl.onrender.com/userjson 
as a JSON data with the name, username, and email
3. Display the names on the page from id 14 include.
 */

/** Async / Await */

async function x() {
  return 5;
  throw new Error("oopps...");
}

const y = async () => {
  return 6;
};

// console.log(x(), y());

async function getXY() {
  try {
    let x1 = await x();
    let y1 = await y();
    return x1 + y1;
  } catch (error) {
    // console.log(error.message);
    return -1;
  }

  // x().then((x) => {
  //   console.log(x);
  //   y().then((y) => console.log(x + y));
  // });
}

// getXY().then(ret => console.log(ret))

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const userInfo = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    // console.log(data);
    // render(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
// userInfo().then(users => render(users))

async function renderUser() {
  let users = await userInfo();
  render(users);
}
// renderUser();

/** Async in loops */
/** WARNING: async doesn't paly nicly with forEach */

const timeout = (mili, id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(id + " Done!");
    }, mili);
  });
};

async function callTimeout() {
  console.log("before, Done!");

  // ["first", "second", "third"].forEach(async (item) => {
  //   console.log(await timeout(2000, item));
  // });
  
  for(const item of ["first", "second", "third"]){
    console.log(await timeout(2000, item));
  }

  console.log("after, Done!");
}
// callTimeout()