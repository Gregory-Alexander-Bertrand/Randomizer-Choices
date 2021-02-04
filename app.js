const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
//Listens for the user to type in the textarea
//This will then create the tags
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

//Once The user hits enter the random element will begin
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})
//This function allows the options to be seperated by comma
function createTags (input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
//This creates the separate tags
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
//Highlight/Remove Highlight of each tag
function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
