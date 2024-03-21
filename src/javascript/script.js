const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const confirm = document.querySelector('.confirm')
const close = document.querySelector('.close')
const email = document.getElementById('email')

btn.addEventListener('click', ()=> {
  modal.classList.toggle('hide')
})

confirm.addEventListener('click', ()=>{
  alert('voce confirmou sua presença')
  if (modal.className === "modal hide") {
    modal.className = "modal"
  }
})

close.addEventListener('click', () => {
  if (modal.className === "modal hide") {
    modal.className = "modal"
  }
})