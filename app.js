let sub = document.getElementById('sub');
// const sub = document.getElementsByClassName("sub");
// const content = document.querySelectorAll('.items');
const content = Array.from(document.getElementsByClassName("items"))




content.map((items) => {
    items.addEventListener("click", (e) => {
        switch (e.target.innerText){
            case "C":
                sub.innerText = "";
                break;
            case "=":
                try {
                    sub.innerText = eval(sub.innerText);
                }
                catch{
                    sub.innerText = "Hello"
                }
                break;
            default:
                sub.innerText += e.target.innerText;
        }
    });
});