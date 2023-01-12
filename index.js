const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const h1 = document.querySelector("h1")

let count = 0;

function render() {
  h1.innerText = count;
  if(count > 0) {
    minusBtn.removeAttribute("disabled");
  }else{
    minusBtn.setAttribute("disabled", "");
  } 
}

plusBtn.addEventListener("click", ()=> {
  count++;
  render();
});

minusBtn.addEventListener("click", ()=> {
  count--;
  render();
});