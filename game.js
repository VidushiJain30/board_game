/*var id=0;
function createT()
{
	var tb1=document.getElementById("tb1");
	for (var r=0;r<5;r++)
	{
		var row=document.createElement("tr");
		for (var c=0;c<5;c++)
		{
			var cell=document.createElement("td");
			cell.width="20px";
			cell.height="20px";
			cell.id=id++;

			row.appendChild(cell);
			cell.innerHTML=id;			
		}
		tb1.appendChild(row);
	}
}*/
function content(elem)
{
	//elem.style.backgroundColor="red";
	var p=document.getElementById("para");
	p.innerHTML='You clicked on cell:'+ ' ' + elem.innerText;
}
