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

$('form').on('submit', myFunction);

document.getElementById('submitbtn').addEventListener('click', function(){
    location.href = "/site/login.html";
})

// Search Users
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5d3f9f9b87c49c04cac13690"
);

let arr = [];

store.read("Users", { search: { fname: "poo23" } }).then(data => {
//   console.log(data[0].fname);
  var arr = [...data];
  //console.log("arr1: " + arr[0].fname);
});

console.log("arr: " + arr);