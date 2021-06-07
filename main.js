const result = document.querySelector('#result p')
const getOperation = document.querySelectorAll('.list-btn span')


const calc = { 
   get() {
      result.classList.remove('error')
      result.innerText += this.innerText.replace('*', 'x') 
   },
   
   delete() {
      const back = result.innerText

      result.innerText = back.substring(0, back.length - 1)
   },

   reset() {
      result.innerText = ''
   },

   calculation() {
      const expression = result.innerText.replace(/x/g, '*')

      try {
         if(Number.isInteger(eval(expression)))
            result.innerText = eval(expression)
         else
            result.innerText = eval(expression)
               .toFixed(8).replace('.', ',')
      
      } catch (e) {
         result.classList.add('error')
      }

      console.log(expression)
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
      body.classList.remove('theme2', 'theme3')
      
   cont++

   if(cont > 3) cont = 1
}

theme.addEventListener('click', alter)