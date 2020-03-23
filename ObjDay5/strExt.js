//stringExtras.js

let StrExt = {};
let newStr = '';

function repeat(str, n) {
    for (let i = 0; i < n; i++) {
        newStr += str;
    };
    // console.log(newStr)
    return `\'${newStr}\'`
};
const leftPad = (str, n) => {
    if (str.length >= n) {
        for (let l of str) {
            newStr += l;
        };
    };
    if (str.length < n) {
        for (let i = 0; i < n - str.length; i++) {
            newStr += ' ';
        };
        newStr += str;
    };
    return `\'${newStr}\'`;
};
const rightPad = (str, n) => {
    if (str.length >= n) {
        return `\'${str}\'`
    }
    else {
        newStr = str;
        for (let i = 0; i < n - str.length; i++) {
            newStr += " ";
        }
        return `\'${newStr}\'`
    }
}
const pad = (str, n) => {
    if (str.length >= n) {
        return `\'${str}\'`
    }
    else {
        left = '';
        right = '';
        for (let i = 0; i < n - str.length; i++) {
            if (i % 2 === 0) {
                left += ' ';
            }
            else {right += ' '}
        }
        return `\'${left}${str}${right}\'`
    }
}
const capitalize = (str, n) => {
    arr = str.split('')
    arr[0] = arr[0].toUpperCase()
    newStr = arr.join('');
    return `\'${newStr}\'`
}

StrExt.repeat = repeat;
StrExt.leftPad = leftPad;
StrExt.rightPad = rightPad;
StrExt.pad = pad;
StrExt.capitalize = capitalize;

let a = 'you'
String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
};
String.prototype.leftPad = function(n) {
    return new Array(`\'${' '.repeat(n-this.length)}${this}\'`).join('')
}
String.prototype.rightPad = function(n) {
    return new Array(`\'${this}${' '.repeat(n-this.length)}\'`).join('')
}
String.prototype.pad = function(n) {
    // console.log(this)
    if (this.length >= n) {return `\'${this}\'`}
    else{
        let left = Math.ceil((n-this.length)/2);
        let right = Math.floor((n-this.length)/2);
        return new Array(`\'${' '.repeat(left)}${this}${' '.repeat(right)}\'`).join('')
    }
}
String.prototype.capitalize = function(n) {
    arr = this.split('')
    arr[0] = arr[0].toUpperCase()
    newStr = arr.join('');
    return new Array(`\'${newStr}\'`).join(' ');
}
console.log(a.capitalize(6));