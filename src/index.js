module.exports = function toReadable(number) {
    let result = [];
    const startsWithOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let numberArr = String(number).split("");

    if(number === 0) return 'zero';

    if(numberArr.length === 3) {
        result.push(hundreds[+numberArr[0]]);
        numberArr = numberArr.slice(1);
    }

    if(+numberArr.join('') < 20) {
        result.push(startsWithOne[+numberArr.join('')]);
    } else {
        result.push(tens[+numberArr[0]]);
        result.push(startsWithOne[+numberArr[1]]);
    }

    

    console.log(result.join(" "));
    return result.join(" ").trim();
};

