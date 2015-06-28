({
    doInit: function(component, event, helper) {
      helper.initStates();  
    },
	handleTileClicked : function(component, event, helper) {
        try{
		var data = event.getParam("data");
        helper.updateState(data.tileNumber, true);
        var gameOver = helper.checkIfWon(component);
        console.log('gameOver ' + gameOver);
        if(!gameOver) {
        	helper.clickAsComputer(component, event);
        }
        } catch(e) {
            console.log(e);
        }
	},
    reset: function(component, event, helper) {
       helper.resetBoard(); 
    },
    newGame: function(component, event, helper) {
       helper.newGame(); 
    }
})