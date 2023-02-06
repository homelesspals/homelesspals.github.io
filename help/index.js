
let postMsg = () => {
    const email = DOMPurify.sanitize(document.getElementById('email').value)
    const request = DOMPurify.sanitize(document.getElementById('help-needed').value)

    let message = `{
        "email": ${email},
        "request": ${request}
    }`

fetch("https://vcudbl.deta.dev/users", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: message
})
.then( (response) => { 
   console.log("done!")
});

document.querySelector('form').style.display = "none";
document.getElementById('hidden').style.display = "block";

}

document.getElementById('submit').onclick = postMsg