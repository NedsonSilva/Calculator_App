const result = document.querySelector('#result p')
const getOperation = document.querySelectorAll('.list-btn span')

const calc = { 
   get() {
      const InvalidPointer = /[+\-x/](?=\.)/g
      const regex = /\d\.\d+(\.)/g
      const regexPointer = /\.(?=\.)/g

      result.classList.remove('error')
      
      result.innerText += this.innerText.replace('*', 'x')
      
      console.log(result.innerText)

      if(regex.test(result.innerText)) 
         setTimeout(() => {
            result.innerText = result.innerText.substring(0, result.innerText.length - 1)
         }, 100)
      else if(regexPointer.test(result.innerText)) 
         setTimeout(() => {
            result.innerText = result.innerText.substring(0, result.innerText.length - 1)
         }, 100)

      if(result.innerText.search(/\./) === 0)
         result.innerText = result.innerText.replace('.', '0.')

      result.innerText = result.innerText.replace(InvalidPointer, '$&0')

      calc.resizeFont()
   },
   
   delete() {
      const back = result.innerText

      result.innerText = back.substring(0, back.length - 1)

      calc.resizeFont()
   },

   reset() {
      result.innerText = ''
      calc.resizeFont()
   },

   calculation() {
      if(result.innerText.search(/,/g) === 1)
         result.innerText = result.innerText.replace(/,/g, '.')

      const expression = result.innerText.replace(/x/g, '*')

      try {
         if(Number.isInteger(eval(expression)))
            result.innerText = eval(expression)
         else
            result.innerText = eval(expression).toFixed(2).replace(/\./, ',')
   
      } catch (e) {
         result.classList.add('error')
      } finally {
         calc.resizeFont()
      }
   },

   resizeFont() {
      const textLength = result.innerText.length

      if(textLength > 12)
         result.style.fontSize = '1.5rem'
      else 
         result.style.fontSize = '2.2rem'
   }
}

for(let operation of getOperation)
   operation.addEventListener('click', calc.get)

//Alter Theme
const theme = document.querySelector('.alter-theme')
let cont = 2;

function alter() {
   
   const body = document.body

   if(cont === 2) 
      body.classList.add('theme2')
   else if(cont === 3) 
      body.classList.replace('theme2', 'theme3')
   else 
      body.classList.remove('theme3')
      
   cont++

   if(cont > 3) cont = 1
}

theme.addEventListener('click', alter)
