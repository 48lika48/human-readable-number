module.exports = function toReadable (number) {
    
    let units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let dozens = ["hundred", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let arr = String(number).split("");
    
    if (number < 20) {
        return units[number];
    }
    else if (arr.length == 2 && arr[1] == 0) {
        return dozens[arr[0]];
    }
    else if (arr.length == 2 && arr[1] !== 0) {
        return dozens[arr[0]] + " " + units[arr[1]];
    }
    else if (arr.length == 3 && arr[1] == 0 && arr[2] == 0) {
        return units[arr[0]] + " " + dozens[0];
    }
    else if (arr.length == 3 && arr[1] == 0) {
        return units[arr[0]] + " " + dozens[0] + " " + units[arr[2]];
    }
    else if (arr.length == 3 && arr[1] == 1) {
        return units[arr[0]] + " " + dozens[0] + " " + units[Number(arr[2])+10];
    }
    else if (arr.length == 3 && arr[2] == 0) {
        return units[arr[0]] + " " + dozens[0] + " " + dozens[arr[1]];
    }
    else {
        return units[arr[0]] + " " + dozens[0] + " " + dozens[arr[1]] + " " + units[arr[2]];
    }
}
