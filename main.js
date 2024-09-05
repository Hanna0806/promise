// function foo() {
//     try {
//         return 1
//     } finally{
//         (console.log(2))
//     } 
// }
// console.log(foo())

// function foo2() {
//     return 1
//     try {
//         (console.log('try'))

//     } finally{
//         (console.log(3))
//     } 
// }
// console.log(foo2())

// function foo3() {
//     try {
//         return 4
//     } finally{
//         return 5
//     } 
// }
// console.log(foo3())


async function getDataAsync() {
    let url = await fetch('https://jsonplaceholder.typicode.com/posts')
    let url2 = await url.json()
    console.log(url2)
}
// getDataAsync()

function getDataPromise() {
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({ name: 'Vlad', age: 32 })
    }
    fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
        .then(response => response.json())
        .then((data) => console.log(data))

}
// getDataPromise()

async function getDataAsync2() {
    const fetchOptions2 = {
        method: 'PUT',
        body: JSON.stringify({ name: 'Vlad', age: 32 })
    }
    try {
        let url = await fetch('https://jsonplaceholder.typicode.com/posts/dwadwa1', fetchOptions2)
        // let url = await fetch('https://jsonplaceholder.typicode.com/posts/1', fetchOptions2)
        
        if (url.ok) {
            let data = await url.json()
            console.log(data);
        } else {
            throw new Error("Ошибка!");
        }
    } catch (err) {
console.log(err)
    }
}
getDataAsync2()

