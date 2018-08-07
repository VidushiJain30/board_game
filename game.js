function content(elem)
{
	//elem.style.backgroundColor="red";
	var p=document.getElementById("para");
	p.innerHTML='You clicked on cell:'+ ' ' + elem.innerText;
}
var ts=60*1;
var min=parseInt(ts/60);
var sec=parseInt(ts%60);
function CheckTime(){
	document.getElementById("timer").innerHTML='Time Left: '+ min+ ' : ' + sec;
	if(ts<=0){
		document.getElementById("timer").innerHTML='TIME OVER';		
	}	
	else{
		ts=ts-1;
		min=parseInt(ts/60);
		sec=parseInt(ts%60);
		setTimeout("CheckTime()",1000);
	}
}
	setTimeout("CheckTime()",1000);
