// import returnSum from "./modules/moduleOne.mjs";
//
// console.log(returnSum(16555, 77777));

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//
//     upvote() {
//         this.votesQty += 1
//     }
// }
//
// const firstComment = new Comment('Херня, а не авто!')
// firstComment.upvote()
// console.log(firstComment)
// console.log(firstComment.text)
// console.log(firstComment.votesQty)

// class Post {
//     constructor(title, text, date = new Date().toLocaleString()) {
//         this.title = title
//         this.text = text
//         this.date = date
//         this.likes = 0
//     }
//
//     like() {
//         this.likes += 1
//     }
//
//     static mergePosts(first, second) {
//         return `${first} ${second}`
//     }
// }
//
// const firstPost = new Post('My first post title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis dolores eos harum unde, vero')
// const secondPost = new Post('Second', 'dsasadasdasdasdasdadssad')
// const thirdPost = new Post('Thirs', 'dsasadasdasdasdasdadssaddfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfg')
// firstPost.like()
// thirdPost.like()
// console.log(firstPost)
// console.log(secondPost)
// console.log(thirdPost)
// console.log(Post.mergePosts('one Post', 'two Post'));


//  console.log(myFirstPost instanceof Object)
// console.log(myFirstPost.hasOwnProperty('text'));
// console.log(myFirstPost.hasOwnProperty('title'));
// console.log(myFirstPost.hasOwnProperty('like'));
// console.log(myFirstPost.hasOwnProperty('hasOwnProperty'));


// const a = [1, 2, 3, 4]
//
// let b = a.reduce((prev, item) => {
//     console.log(prev)
//     console.log(item)
//     return prev + item
// }, 0)
// console.log(b)
//
// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return 'Draw!'
//     }
//     if (p1 === 'rock' && p2 === 'paper') {
//         return 'Player 2 won!'
//     }
//     if (p1 === 'scissors' && p2 === 'rock') {
//         return 'Player 2 won!'
//     }
//     if (p1 === 'paper' && p2 === 'scissors') {
//         return 'Player 2 won!'
//     }
//
//     if (p1 === 'rock' && p2 === 'scissors') {
//         return 'Player 1 won!'
//     }
//     if (p1 === 'scissors' && p2 === 'paper') {
//         return 'Player 1 won!'
//     }
//     if (p1 === 'paper' && p2 === 'rock') {
//         return 'Player 1 won!'
//     }
// };
// console.log(rps('paper', 'rock'));

// function removeEveryOther(arr){
//   for(let i = 0; i < arr.length; i++) {
//     if (i)
//   }
//     arr.reduce((prev, item, index)=> {
//         console.log(index)
//     })
// }
// removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])

// function removeEveryOther(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         if (i % 2 !== 0) {
//             arr.splice(i, 1)
//         }
//     return arr
//     }
// }
//
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((prev, el) => prev += el, 0)
//     }
//     arithmeticMean() {
//         return this.reduce((prev, el) => prev += el, 0) / this.length
//     }
// }
// const myArray = new NumbersArray(2, 5, 7, 3)
//
// console.log(myArray)
// console.log(myArray.sum())
// console.log(myArray.arithmeticMean())


// RootElement <= Box <= instances

class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = '20px'
    }

    hide() {
        this.$el.style.opacity = 0
    }

    show() {
        this.$el.style.opacity = 1
    }

    append() {
        document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
    }
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName)
        this.color = color
        this.size = size
    }

    create() {
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`

        this.append()


        return this
    }
}

class Circle extends RootElement {
    constructor(color, size) {
        super();
        this.color = color
        this.size = size
    }

    create() {
        this.$el.style.background = this.color
        this.$el.style.height = this.$el.style.width = `${this.size}px`
        this.$el.style.borderRadius = '50%'
        this.append()

        return this
    }

}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue', 200,).create()
const greenCircle = new Circle('green', 100).create()

greenCircle.$el.addEventListener('mouseenter', () => {
    greenCircle.hide()
})
greenCircle.$el.addEventListener('mouseleave', () => {
    greenCircle.show()
})