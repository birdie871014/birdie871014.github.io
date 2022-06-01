//Send an idea


function sendIdea() {
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
    }
};

    let idea = document.querySelector("#idea").value;
    let data = {"text": idea}
req.open("POST", "https://api.jsonbin.io/b/62972a71449a1f3821f93f32", true);
req.setRequestHeader("Content-Type", "application/json");
req.send('{"sample": "Hello World"}');
}



/* function sendIdea() {
    let idea = document.querySelector("#idea").value;
    let data = {"text": idea}
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch(`http://localhost:3000/ideas`, fetchOptions)
} */