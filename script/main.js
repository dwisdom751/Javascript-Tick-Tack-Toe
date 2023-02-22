class Board {
	constructor()
	{
		this.spaces = [["-","-","-"],["-","-","-"],["-","-","-"]]
	}
	
	changeSpace(x, y, changeTo)
	{
		if(this.spaces[x][y] == "-")
		{
			this.spaces[x][y] = changeTo
			return true
		}
		return false
	}
	
	checkBoard()
	{
		//check diagonals first
		if(this.spaces[0][0] == this.spaces[1][1] && this.spaces[1][1] == this.spaces[2][2]
			&& this.spaces[0][0] != "-")
		{
			return this.spaces[0][0]
		}
		if(this.spaces[0][2] == this.spaces[1][1] && this.spaces[2][0] == this.spaces[1][1]
			&& this.spaces[0][2] != "-")
		{
			return this.spaces[0][2]
		}
		//check going down
		for(var count = 0; count < 3; count++)
		{
			if(this.spaces[count][0] == this.spaces[count][1]
				&& this.spaces[count][2] == this.spaces[count][1] 
				&& this.spaces[count][0] != "-")
				{
					return this.spaces[count][0]
				}
		}
		//check going across
		for(var count = 0; count < 3; count++)
		{
			if(this.spaces[0][count] == this.spaces[1][count]
				&& this.spaces[2][count] == this.spaces[1][count] 
				&& this.spaces[0][count] != "-")
				{
					return this.spaces[0][count]
				}
		}
		
		return "-"
	}
	
	
}

myBoard = new Board()
whoseTurn = "X"

function swapWhose()
{
	if(whoseTurn == "X")
	{
		whoseTurn = "O"
	}
	else if(whoseTurn == "O")
	{
		whoseTurn = "X"
	}
}

function processClick(x,y)
{
	if(myBoard.changeSpace(x,y,whoseTurn))
	{
		document.getElementById(""+x+","+y+"").innerText = whoseTurn
		swapWhose()
	}
	
	var whoWon = myBoard.checkBoard()
	
	if(whoWon != "-")
	{
		document.getElementById("winText").innerHTML = whoWon + " won the game!"
	}
}


