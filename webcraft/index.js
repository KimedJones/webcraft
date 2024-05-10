import './app.js'

const startButton = document.querySelector("#start")

startButton.addEventListener('click', (e) => {
    const game = window.open('./src/', '_blank', 'location=no, top=0, left=0, width=856, height=482, scrollbars=0');
    startButton.disabled = true;
    game.addEventListener('close', (e) => {
        startButton.disabled = false;
    })
})

