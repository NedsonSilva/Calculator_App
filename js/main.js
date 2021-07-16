const result = document.querySelector('#result p')
const getOperation = document.querySelectorAll('.list-btn span')

const calc = {
   get() {
      result.classList.remove('error')
      result.innerText += this.innerText.replace('*', 'x')
      calc.formatExpression()
      calc.resizeFont()
   },

   formatExpression() {
      const expression = result.innerText
      const regex = /\d\.\d+(\.)/g
      const InvalidPointer = /[+\-x/](?=\.)/g
      const regexPointer = /\.(?=\.)/g
      const operatorInvalid = /[+\-x/](?=\/|\+|-|x)/g
      const pointerInOperator = /\.(?=[+\-x/])/g

      function updateExpression() {
         setTimeout(() =>
            result.innerText = result.innerText
            .substring(0, result.innerText.length - 1), 100)
      }

      const verification = regex.test(expression) ||
         regexPointer.test(expression) ||
         result.innerText.includes('//') ||
         operatorInvalid.test(expression) ||
         pointerInOperator.test(expression) ||
         result.innerText.lastIndexOf('/') === 0

      if (verification) updateExpression()
      if (result.innerText.search(/\./) === 0) result.innerText = result.innerText.replace('.', '0.')

      result.innerText = result.innerText.replace(InvalidPointer, '$&0')
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
      if (result.innerText.search(/,/g) === 1)
         result.innerText = result.innerText.replace(/,/g, '.')

      const expression = result.innerText.replace(/x/g, '*')

      try {
         if (Number.isInteger(eval(expression)))
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
      if (textLength > 12) result.style.fontSize = '1.5rem'
      else result.style.fontSize = '2.2rem'
   }
}

getOperation.forEach(get => get.addEventListener('click', calc.get))

//Alter Theme
const theme = document.querySelector('.alter-theme')

let themeAlt = 1

function alterTheme() {
   const body = document.body

   if (themeAlt === 1)
      body.classList.add('theme2')
   else if (themeAlt === 2)
      body.classList.replace('theme2', 'theme3')
   else
      body.classList.remove('theme2', 'theme3')

   themeAlt > 2 ? themeAlt = 1 : themeAlt++
}

theme.addEventListener('click', alterTheme)