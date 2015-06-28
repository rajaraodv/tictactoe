({ 
    afterRender: function(component, helper) { 
        var svg = component.find(component.get("v.type"));
        var width = component.get("v.width");
        var height = component.get("v.height");
        var color = component.get("v.color");
        var value = svg.getElement().innerText; 
        value = value.replace(/wwww/g, width); 
        value = value.replace(/hhhh/g, height); 
        value = value.replace(/cccc/g, color);
        svg.getElement().innerHTML = value;
       	helper.showHideSpinner(component); 
	}
})