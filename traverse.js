;(async function main() {
  let labels = Array.from(document.querySelectorAll('.style_row  label.svelte-1p9xokt'))

  let button = document.querySelector('#component-10')

  let waitForButtonAvailable = () =>
    new Promise((resolve) => {
      let interval = setInterval(() => {
        if (!button.disabled) {
          clearInterval(interval)
          resolve()
        }
      }, 1000)
    })

  let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  for (let label of labels) {
   
    await waitForButtonAvailable()
    console.log(
      'clicking',
      label.innerText,
      `(${labels.indexOf(label) + 1}/${labels.length})`,
    )
    label.click()
    button.click()
    await sleep(4000)
  }
})()
