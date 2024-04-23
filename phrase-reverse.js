function reverseWords(str) {
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

 console.log('reverse this phrase', reverseWords('reverse this phrase'))