// Chapter 07 - Strings

// 7.2 - String base conversion
function baseConversion(str, b1, b2) {
    var sum = 0;
    var n = str.length;
    var res = "";
    var map = {10: 'A', 11: 'B', 12:'C', 13: 'D', 14: 'E', 15: 'F'};
    var reverseMap = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15}
    
    for(var i = 0; i < str.length; i++) {
        var j = str.length-1-i;
        var val = reverseMap[str[i]] || Number(str[i]);
        sum += val * Math.pow(b1, j);
    }

    for(var i = str.length - 1; i >= 0; i--) {
        var val = Math.floor(sum / Math.pow(b2, i));
        res += map[val] ? map[val] : val;
        sum -= val * Math.pow(b2, i);
    }

    return res;
}

// 7.8 - Look and Say
function lookAndSay(n) {
    var lastString = "1";

    for(var times = 0; times < n - 1; times++) {
        var newString = "";
        var c = lastString[0], cCount = 0;

        for(var i = 0; i < lastString.length; i++) {
            if(lastString[i] === c) {
                cCount++;
            } else {
                newString += cCount + c;
                c = lastString[i];
                cCount = 1;
            }
        }

        if(cCount > 0) newString += cCount + c;

        lastString = newString;
    }

    return lastString;
}
