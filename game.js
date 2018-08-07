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

var blocks;
var myTable;
var nums = [];

function initlization() {
  myTable = document.getElementsByTagName("table")[0];
  shuffle(); //need to shuffle initially 
}

function shuffle() {
  //need to get all tds each time the table is shuffled
  blocks = document.getElementsByTagName("td");
  tableSize = blocks.length;
  shuffledArray(0, tableSize);
  for (var i = 0; i < tableSize; i++) {
    blocks[i].innerHTML = '<span draggable="true">' + nums[i] + '</span>';
  }
}
function shuffledArray( from,  to) {
for(i=from; i<to;i++){
    nums[i-from]=i;
    }
for (var i = to-from; i; i--) {
    j= Math.floor(Math.random() *i);

    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
    }
}