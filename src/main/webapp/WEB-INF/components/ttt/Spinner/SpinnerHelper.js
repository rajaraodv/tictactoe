({
	showHideSpinner : function(component) {
		var svg = component.find(component.get("v.type"));
        if(component.get('v.show')) {
           svg.getElement().style.display = 'block'; 
        } else {
           svg.getElement().style.display = 'none'; 
        } 
	}
})