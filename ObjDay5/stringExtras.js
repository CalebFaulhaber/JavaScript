let strExt = {

    const repeat = () => {
        repeat(str,n);
        for (let i in n) {
            newStr += str;
        }
        return newStr;
    }
    const leftPad = () => {
        leftPad(str,n);
        for(let i = 1; i <= n-str.length; i++){
            newStr+n;
        }
        return newStr + str;

    },

    function rightPad(str,n){
        let newStr = "";
        for (let i = 1; i <= n-str.length; i++) {
            newStr + n;
        }
        return newStr + str;
    }
    for(let i = 1; i <=Math.ceil(n-str.length / 2; i++)) {
        let str += "";
    }
    for (let i = 1; i < Math.floor(n-str.length / 2; i++)){
        str += "";
    }
}
console.log(strExt)

repeat('hello how are you', 3)
