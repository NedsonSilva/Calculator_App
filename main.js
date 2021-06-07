const result = document.querySelector('#result p')

const calc = { 
   get(number) {
      result.classList.remove('error')
      result.innerText += number.replace('*', 'x')    
   },
   
   delete() {
      const del = document.getElementById('del')
      const back = result.innerText

      result.innerText = back.substring(0, back.length - 1)
   },

   reset() {
      result.innerText = ''
   },

   calculation() {
      const expression = result.innerText.replace('x', '*')

      try {
         if(Number.isInteger(eval(expression)))
            result.innerText = eval(expression)
         else
            result.innerText = eval(expression)
               .toFixed(5).replace('.', ',')
      
      } catch (e) {
         result.classList.add('error')
      }
   }
}

//ALTERAR TEMA
const theme = document.querySelector('.selected')
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