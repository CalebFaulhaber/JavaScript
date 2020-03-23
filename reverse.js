
const reverse = (str) => {
    let answer = str.split('').reverse().join('')
    console.log(`\"${str}\" reversed is \"${answer}\."`)
}

reverse("hello")