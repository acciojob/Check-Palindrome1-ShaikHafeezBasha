// complete the given function

function palindrome(str){
	const len=str.length;
	for(let i=0;i<len;i++){
		if(str[i]!=str[len-1-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
