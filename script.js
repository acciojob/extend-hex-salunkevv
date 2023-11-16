const extendHex = (shortHex) => {
  // write your code here
	let ans="#";

	for(let i=0;i<4;i++)
		{
			if(shortHex.charAt(i)=="#")
			{
				continue;
			}
			else
			{
				ans= ans+shortHex.charAt(i)+shortHex.charAt(i);
			}
		}
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
