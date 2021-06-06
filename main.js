const result = document.querySelector('#result p')

const calc = { 
   get(number) {
      result.style.color = 'rgba(255, 255, 255, 0.965)'
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
         result.style.color = 'rgb(238, 53, 53)'
         result.innerText = 'invalid operation!'
      }
   }
}

//ALTERAR TEMA
const theme = document.querySelector('.selected')
let cont = 2;
function alter() {
   // if(theme.classList.toggle('theme2'))  
   //    theme.classList.toggle('theme3')
   const main = document.querySelector('main')

   if(cont < 4) {
      if(cont === 2) 
         main.classList.add('theme2')
      else if(cont === 3) 
         main.classList.replace('theme2', 'theme3')
      else 
         main.classList.remove('theme2', 'theme3')
      cont++
   }

   if(cont > 3) cont = 1

}

theme.addEventListener('click', alter)