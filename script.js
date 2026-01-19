function main(){
    const q1 = document.getElementById("q1");
    q1.onclick = ()=> {
        alert("Q1 solved")
    }
    const q2 = document.getElementById("q2");
    const q2Para = document.getElementById("q2Para");
    function changeInnerText(){
        q2Para.innerText = "Q2 solved"
    }
    q2.onclick = ()=> changeInnerText();
    const form = document.getElementById("q3");
    form.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const a = Number(formData.get("a"));
        const b = Number(formData.get("b"))
        let ans = a + b;
        const newDiv = document.createElement("div");
        newDiv.textContent = `Sum = ${ans}`
        form.after(newDiv)
    }
    const q4 = document.getElementById("q4");
    q4.onclick = () => {
        document.body.style.backgroundColor = "yellow"
    }
    const q5 = document.getElementById("q5");
    q5.onclick = () => {
        const newDiv = document.createElement("div")
        const date = new Date();
        date.getTime()
        newDiv.textContent =  date;
        q5.after(newDiv);
    }
}
main(); 
