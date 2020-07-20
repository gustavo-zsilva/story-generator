const customName = document.querySelector('#customname')
const randomizeBtn = document.querySelector('.randomize')
const story = document.querySelector('.story')
const radioUk = document.querySelector('#uk')

const quotes = [
    [
        'Willy the Goblin',
        'Big Daddy',
        'Father Christmas'
    ],
    [
        'the soup kitchen',
        'Disneyland',
        'the White House'
    ],
    [
        'spontaneously combusted',
        'melted into a puddle on the sidewalk',
        'turned into a slug and crawled away'
    ]

]

function randomizer(id) {
    return Math.floor(Math.random() * quotes[id].length)
}

let name = 'Bob'
let weight = '300 pounds'
let temperature = '94 fahrenheit'

// Variáveis para gerar os traços principais da história
let insertX = randomizer(0)
let insertY = randomizer(1)
let insertZ = randomizer(2)


randomizeBtn.addEventListener('click', () => {
    story.textContent = ''

    insertX = randomizer(0)
    insertY = randomizer(1)
    insertZ = randomizer(2)

    if (customName.value.length !== 0) {
        name = customName.value
    }

    if (radioUk.checked) {
        weight = `${Math.round(300 * 14)} stones`
        temperature = `${Math.round((94 - 32) / 1.8)} centigrades`
    }

    renderStory()
})

function renderStory() {
    story.style.visibility = 'visible'

    story.textContent = `It was ${temperature} outside, so ${quotes[0][insertX]} went for a walk. When they got to ${quotes[1][insertY]}, they stared in horror for a few moments, then ${quotes[2][insertZ]}. ${name} saw the whole thing, but was not surprised — ${quotes[0][insertX]} weighs ${weight}, and it was a hot day.`

    customName.value = ''
    customName.focus()
}

// lb = st * 14.000 
