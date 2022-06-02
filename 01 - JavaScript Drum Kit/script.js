const keys = document.querySelectorAll('.key') //creates array of objects with class of key

function playSound(keyDown) {
  const audio = document.querySelector(`audio[data-key="${keyDown.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyDown.keyCode}"]`)
  if(!audio) return; //if invalid key is selected, stop function
  audio.currentTime = 0 //restarts audio if key is selected in succession
  audio.play()
  key.classList.add('playing') //adds playing class for css effects
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if its not a transform in css
  this.classList.remove('playing') //removes playing class to remove css effects
}


window.addEventListener('keydown', playSound)
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //after a transition is completed, it will run the removeTransition function
