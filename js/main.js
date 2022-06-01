//Send an idea


function sendIdea1() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    let idea = document.querySelector("#idea").value;
    let data = { "text": idea }
    req.open("POST", "https://api.jsonbin.io/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$hp9/wd9NCSdkeHRwL957IeR8SWdOSO06ciao741IB3uwcv7nN3DpC");
    req.send('{"sample": "Hello World"}');
    console.log(data)
}



function sendIdea2() {
    let idea = document.querySelector("#idea").value;
    let data = { "text": idea }
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$JD2kC0Ju32K8zhFDWPKc6uGVvBLtBgGGVEfJHaPptIvFuVp0ShETC',
        },
        body: JSON.stringify(data)
    }
    fetch(`https://api.jsonbin.io/b`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => console.log(data),
        alert("Köszönjöm az észrevételt!")
    )

}