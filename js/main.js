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
      const expression = String(result.innerText)
      const regex = /\d\.\d+(\.)/g
      const InvalidPointer = /[+\-x/](?=\.)/g
      const hasPointerDupliqued = /\.(?=\.)/g
      const operatorInvalid = /[+\-x/](?=\/|\+|-|x)/g
      const pointerInOperator = /\.(?=[+\-x/])/g

      function updateExpression() {
         setTimeout(() =>
            result.innerText = result.innerText
            .substring(0, result.innerText.length - 1), 100)
      }

      const verification = regex.test(expression) ||
         hasPointerDupliqued.test(expression) ||
         expression.includes('//') ||
         operatorInvalid.test(expression) ||
         pointerInOperator.test(expression)

      
      if (expression.startsWith('/') || expression.startsWith('x')) updateExpression()

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

let themeAlt = Number.parseInt(localStorage.getItem('theme')) || 2
setTheme()

function alterTheme() {
   themeAlt > 3 ? themeAlt = 2 : themeAlt++

   setTheme()

   localStorage.setItem('theme', JSON.stringify(themeAlt))
}

function setTheme() {
   const body = document.body

   if (themeAlt === 2) 
      body.classList.add('theme2')
   else if (themeAlt === 3) {
      body.classList.add('theme3')
      body.classList.remove('theme2')
   }
   else
      body.classList.remove('theme3', 'theme2')
}

const theme = document.querySelector('.alter-theme')

theme.addEventListener('click', alterTheme)