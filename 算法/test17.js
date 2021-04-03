/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s=s.toLowerCase().match(/[a-zA-Z]/g);
    if(s && s.length){
        let start=0,end=s.length-1;
        while(start < end){
            if(s[start] != s[end]) return false;
            start++;
            end--;
        }
        console.log(start);
    }
    
    return true;
};
console.log(isPalindrome("OP"));