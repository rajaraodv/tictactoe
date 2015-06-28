({
	myAction : function(component, event, helper) {
		
	},
    handleGameOver: function(component, event, helper) {
        var whoWon = event.getParam("whoWon");
        var message = event.getParam("message");
        if(whoWon === 1) {
            component.set('v.yourScore', component.get('v.yourScore') + 1);
        } else if (whoWon === 2) {
             component.set('v.computerScore', component.get('v.computerScore') + 1);
        }
        component.set('v.message', message);     
    },
    handleResetBoard: function(component, event, helper) {
		component.set('v.yourScore', 0);
        component.set('v.computerScore', 0);
		component.set('v.message', '');     
    },
    handleNewGame: function(component, event, helper) {
		component.set('v.message', '');     
    }
})