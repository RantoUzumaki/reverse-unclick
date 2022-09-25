let divCount = 4
let rootDiv = document.getElementById('root')
let que = []

loopDiv()

function loopDiv() {
  let wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  for (let row = 0; row < divCount; row++) {
    let rowElement = document.createElement('div')
    rowElement.classList.add('row')

    for (let col = 0; col < divCount; col++) {
      let colElement = document.createElement('div')
      colElement.classList.add('col')
      rowElement.append(colElement)
    }
    wrapper.append(rowElement)
  }
  rootDiv.append(wrapper)
}

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains('col')) return
  if (que.includes(event.target)) return
  event.target.classList.add('yellow')
  que.push(event.target)

  if (que.length >= (divCount ** 2)) {
    const interval = setInterval(() => {
      const col = que.shift()
      col.classList.remove('yellow')

      if (que.length === 0) {
        clearInterval(interval)
      }
    }, 500)
  }

})