({
	setValue : function(component, value) {
        if(component.get('v.isGameOver')) {
            return;
        }
		var currentVal = component.get('v.value');
        if(currentVal === 'X' || currentVal === 'O') {
            alert('This tile is already used')
            return;
        }
		component.set("v.value", value);
        if(value === 'X') {
            component.getElement().style.backgroundColor = 'rgb(84, 68, 228)'; 
        	var cmpEvt = component.getEvent("onTileClicked");
        	cmpEvt.setParams({ "data" : {tileNumber: component.get('v.tileNumber')}});
        	cmpEvt.fire();
        } else if(value === 'O') {
           component.getElement().style.backgroundColor = 'orange'; 
        }
	},
    resetMe: function(component, event) {
        component.set('v.isGameOver', false);
        component.set('v.value', 'Tap');
		component.getElement().style.backgroundColor = 'gray';
    }
})