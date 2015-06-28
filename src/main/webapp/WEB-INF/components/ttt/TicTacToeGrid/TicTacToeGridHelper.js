({
    initStates: function() {
       this.state = [0,0,0,0,0,0,0,0,0];
    },
 	resetBoard: function() {
       this.initStates();
       var appEvent = $A.get("e.ttt:ResetBoard");
       appEvent.fire();
    },
  	newGame: function() {
      this.initStates();
       var appEvent = $A.get("e.ttt:NewGame");
       appEvent.fire();
    },
    updateState: function(tileNumber, isUser) {
        this.state[tileNumber - 1] = isUser ? 1 : 2;
    },
    checkIfWon: function(component) {
        function w(b){
            var result = {};
            var i = '012345678036147258048642';
            for (var l=0;l<=21;l+=3){
                var v = b[i[l]];
                if (v == b[i[l+1]]) if (v == b[i[l+2]]) return result = {v:v, tileNumbers:[parseInt(i[l])+1, parseInt(i[l+1])+1, parseInt(i[l+2])+1]};   
            }
            return result;
    	}
        var val = w(this.state);
        var gameOver;
        var message;
        if(val.v === 1) {
            gameOver = true;
            message ='Congrats! You Won! ';
           // component.set('v.yourScore', component.get('v.yourScore') + 1);
        } else if(val.v === 2) {
             gameOver = true;
            message ='Sorry! You Lost :(';
           // component.set('v.computerScore', component.get('v.computerScore') + 1);
        } else if(this.state.indexOf(0) === -1) {
            gameOver = true;
            message = 'Game Was A Draw! ';
        }
        if(gameOver) {
            var appEvent = $A.get("e.ttt:GameOver");
        	appEvent.setParams({ "tileNumbers" : val.tileNumbers});
            appEvent.setParams({ "whoWon" : val.v});
            appEvent.setParams({ "message" : message});
			appEvent.fire();
            //setTimeout(function() {
            //    alert(message);
            //}, 200);
            
        }
        return gameOver;
	},
    clickAsComputer: function(component, event) {
        var emptyCells = [];
        for(var i = 0; i < this.state.length; i++) {
            if(this.state[i] === 0) {
                emptyCells.push(i + 1);
            }
        }
        //debugger;
        var tileNumber = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        console.log('computer will click: '+ tileNumber);
        var appEvent = $A.get("e.ttt:ComputerClicked");
        appEvent.setParams({ "data" : {tileNumber: tileNumber} });
		appEvent.fire();
        //update state to show that the computer has changed a tile
        this.updateState(tileNumber);
        //check if computer has won
        this.checkIfWon(component);
    }
})