
const panels = document.querySelectorAll(".panel");

function open () {

  const openedPanels = document.querySelectorAll(".open");

  this.classList.toggle("open");

  openedPanels.forEach(openedPanel => openedPanel.classList.remove("open"));

}

function active (evt) {

  if (evt.propertyName.includes("flex")) {

     this.classList.toggle("open-active")
    
  }
  
}

panels.forEach( panel =>  panel.addEventListener('click', open));
panels.forEach( panel =>  panel.addEventListener('transitionend', active));