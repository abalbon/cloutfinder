function myFunction(e) {

    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
    );
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#psw").val();
    
    store
        .append("Users", [
        {
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            password: password
        }
        ])
        .then(res => {
            console.log(res);
        });
        e.preventDefault();   
}

let form = document.getElementById('form');
form.addEventListener('submit', myFunction);

document.getElementById("submitbtn").onclick = function () {
    location.href = "/site/login.html";
};

// Search Users
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
);

store.read("Users", { search: { fname: "poo23" } }).then(data => {
//   console.log(data[0].fname);
  var x = [...data];
  console.log(x);
  console.log(x[0].fname);  
});
