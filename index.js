  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.


//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.

// GRAB HTML
const greetingEl = document.getElementById("greeting")
const btnEl = document.getElementById("btn")
const bodyEl = document.getElementById("body")
const containerEl = document.getElementById("container") 

// PROGRESS VARIABLE
let pageIncrement = 0

// EVENT LISTENER FOR THE BUTTON
btnEl.addEventListener('click', fix)

// MAIN FUNCTION
// Inrements a number to indicate progress.  With that progress,
// a class is added to change the CSS of the page
function fix() {
  switch(pageIncrement) {
    case 0:
      pageIncrement++
      bodyEl.classList.add('fixing')
      greetingEl.textContent = '🎄 Merry Christmas! 👻'
      btnEl.textContent = 'Looking Good!  Click to fix some more!'
      break

    case 1:
      pageIncrement++
      bodyEl.classList.remove('fixing')
      bodyEl.classList.add('toofar')
      greetingEl.textContent = '👻 SPOOKY Christmas! 👻'
      btnEl.textContent = "OH NO!  UNDO, before it's too late!"
      break
      
    case 2:
      pageIncrement++
      bodyEl.classList.remove('toofar')
      bodyEl.classList.add('fixing')
      greetingEl.textContent = '🎄 Merry Christmas! 👻'
      btnEl.textContent = "That was close!  Let's finish this!"
      break
      
    case 3:
      pageIncrement++
      bodyEl.classList.remove('fixing')
      bodyEl.classList.add('fixed')
      greetingEl.textContent = '🎄 Merry Christmas! 🎁'
      btnEl.textContent = "Looks GREAT!  AMAZING job!"
      break
      
      case 4:
      pageIncrement = 0
      bodyEl.classList.remove('fixed')
      greetingEl.textContent = '🎃 Merry Christmas! 👻'
      btnEl.textContent = "Make it Christmassy!"

      break
      
    default:
      console.log("WHAT WHAT WHAT")
  }
}




