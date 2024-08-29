// const userData = {
//     name: 'Vlad',
//     age: 32
// }

// class MyPromise {
//     constructor(executor) {
//         this.lineHandlers = []
//         this.errorHandler = () => {}
//         this.finallyHandler = () => {}

//         try{
//             executor(this.resolve.bind(this), this.reject.bind(this))
//         } catch(e) {
//             this.errorHandler(e)
//         }


//     }

//     resolve(data) {
//         this.lineHandlers.forEach(callback => {
//             data = callback(data)
//         })
//         this.finallyHandler()

//      }
//     reject(err) {
//         this.errorHandler(err) 
//         this.finallyHandler()
//      }
//     then(fn) {
//         //необходима для чейнинга then
//         this.lineHandlers.push(fn)
//         //возвращает объект, который содержит все методы инстанса класса
//         return this
//     }
//     catch(fn) {
//         return this
//     }
//     finally(fn) {
//         this.errorHandler = fn
//         return this
//     }
// }

// const promise = new MyPromise((resolve, reject) => {
//     console.log('executor RUN');
//     setTimeout(() => {
//         resolve(userData)
//         console.log('setTimeout into executor');
//     }, 1500)
// })

// promise
//     .then((result) => {
//         console.log('then 1');
//         console.log(result);
//         result.done = true
//         return result
//     })
//     .then((result) => {
//         console.log('then 2');
//         console.log(result);
//         return result
//     })
//     .catch(e => {
//         console.log(e)
//         return 'error'
//     })
//     .finally(() => {
//         console.log('finally')
//     })

const promise1 = new Promise(() => {

})
console.log(promise1)


const promise = fetch('https://jsonplaceholder.typicode.com/photos/1')
// console.log(promise)

const img = document.querySelector('.img')
const title = document.querySelector('.title')

// promise.then(data => {
//     const result = data.json
//     console.log(result)


// })
//     .then(response => 
//         console.log(response);
//         img.src = response.thumbnailUrl
//         title.innerHTML = response.title
//         )


// console.log('start');
// setTimeout(() => {

// })

// function foo() {
//     setTimeout(() => {
//         console.log('setTimeout 1');
//     }, 0)
// }

// Promise.resolve("resolve")
//     .then(() => {
//         console.log('promise 1');
//     })
//     .then(() => {
//         console.log('promise 1');
//     })

//     Promise.resolve("resolve2")
//     .then(() => {
//         console.log('promise 2');
//     })
//     .then(() => {
//         console.log('promise 2');
//     })

// setTimeout(() => {
//     console.log('setTimeout 2');
// }, 0)
// console.log('end');

// синхронный код
// микротаски
// макротаски
// result -> start end promise 1 promise 2 setTimeout 1 setTimeout 2


// синхронный код 
// микротаски
// макротаски
// result -> start end 'promise 1' 'promise 2' 'promise 1' 'promise 2' 'setTimeout 2' 'setTimeout 1'

console.log('start')

function foo() {
    setTimeout(() => {
        console.log('setTimeout 1')
    }, 0)
}

const promise = new Promise((resolve) => {
    console.log('executor start');

    setTimeout(() => {
        console.log('setTimeout into pormise');
        resolve('resolve')

    })
    console.log('executor finish');

})
Promise.resolve('resolve2')
    .then(() => {
        console.log('promise 2');
    })
    .then(() => {
        console.log('promise 2');
    })

promise.then(() => {
        console.log('promise 1');
    })
    .then(() => {
        console.log('promise 1');
    })

setTimeout(() => {
    console.log(' setTimeout 2')
}, 0)

foo()
console.log('end')

// синхронный код 
// микротаски
// макротаски
// result -> 'start' 'executor start' 'executor finish' end  'promise 2' 'promise 2' 
//  'setTimeout into pormise''promise 2' 'promise 1' ' setTimeout 2'  'setTimeout 1'
