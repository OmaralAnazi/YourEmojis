const myEmojis = ["👨‍💻", "🎮", "⛩️", "🍜", "👒"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

pushBtn.addEventListener("click", () => modifyEmojis("push", emojiInput.value))
unshiftBtn.addEventListener("click", () => modifyEmojis("unshift", emojiInput.value))
popBtn.addEventListener("click", () => modifyEmojis("pop"))
shiftBtn.addEventListener("click", () => modifyEmojis("shift"))
renderEmojis()

function renderEmojis() {
    let htmlEmojis = ""
    myEmojis.forEach( emoji => htmlEmojis += `<span>${emoji}</span>` )
    emojiContainer.innerHTML = htmlEmojis
}

function modifyEmojis(action, emoji) {
    if (action === "pop") 
        myEmojis.pop()
    else if (action === "shift")
        myEmojis.shift()
    else if (emoji) {
        if (action === "push") 
            myEmojis.push(emoji)
        else 
            myEmojis.unshift(emoji)
        emojiInput.value = ""
    }
    renderEmojis()
}