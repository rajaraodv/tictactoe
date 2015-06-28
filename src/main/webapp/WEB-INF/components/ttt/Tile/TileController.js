({
	handleClick : function(component, event, helper) {
  		helper.setValue(component, 'X');
	},
    handleComputerClicked: function(component, event, helper) {
        var tileNumber = event.getParam("data").tileNumber;
        if(component.get('v.tileNumber') === tileNumber) {
            helper.setValue(component, 'O');
        }
    },
    handleResetBoard: function(component, event, helper) {
		helper.resetMe(component);      
    },
    handleNewGame: function(component, event, helper) {
		helper.resetMe(component);        
    }, 
    handleGameOver: function(component, event, helper) {
        var tileNumbers = event.getParam("tileNumbers");
        component.set('v.isGameOver', true);
        if(tileNumbers.indexOf(component.get('v.tileNumber')) >= 0) {
            component.getElement().style.backgroundColor = 'rgb(79, 174, 94)';
        }
    }
})