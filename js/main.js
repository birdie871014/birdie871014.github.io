
// send an idea to local json server


function sendIdea() {
    let idea = document.querySelector("#idea").value;
    let data = { "text": idea }
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch("http://localhost:3000/ideas", fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => console.log(data),
        alert("Köszönjöm az észrevételt!")
    )

}


//Send an idea to jsonbin.io

function sendIdea1() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    let idea = document.querySelector("#idea").value;
    let data = { "text": idea }
    req.open("POST", "https://api.jsonbin.io/v3/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-key", "$2b$10$JD2kC0Ju32K8zhFDWPKc6uGVvBLtBgGGVEfJHaPptIvFuVp0ShETC");
    req.send('{"sample": "Hello World"}');
    console.log(data)
}


