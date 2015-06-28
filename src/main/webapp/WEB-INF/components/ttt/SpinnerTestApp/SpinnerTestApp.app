<aura:application >
    <aura:attribute name='showSpinner' type='Boolean' default='true' />
    <div style='margin-top:100px;margin-left:300px;'>
     <ui:button label="Toggle Spinners" press="c.toggleSpinners" />
        <br/>
        <br/>
     <![CDATA[
    <c:Spinner type="bars" width="64" height="64" color="red" show="{!v.showSpinner}"/>
	]]>   
    <c:Spinner type="bars" width="64" height="64" color="red" show="{!v.showSpinner}"/>
    <br/>
    <![CDATA[
    	<c:Spinner type="spears" width="64" height="64" color="purple" show="{!v.showSpinner}"/>
	]]>        
    <c:Spinner type="spears" width="64" height="64" color="purple" show="{!v.showSpinner}"/>
      <br/>   
    <![CDATA[
    	<c:Spinner type="bubbles" width="64" height="64" color="green" show="{!v.showSpinner}"/>
	]]>        
    <c:Spinner type="bubbles" width="64" height="64" color="green" show="{!v.showSpinner}"/>
      <br/>   
    <![CDATA[
     <c:Spinner type="spin" width="64" height="64" color="orange" show="{!v.showSpinner}"/>
	]]>        
     <c:Spinner type="spin" width="64" height="64" color="orange" show="{!v.showSpinner}"/>
      <br/>    
    <![CDATA[
    <c:Spinner type="cyclone" width="64" height="64" color="blue" show="{!v.showSpinner}"/>
	]]>       
    <c:Spinner type="cyclone" width="64" height="64" color="blue" show="{!v.showSpinner}"/>
     <br/>            
    <![CDATA[
    <c:Spinner type="cubes" width="64" height="64" color="rgb(60, 227, 240)" show="{!v.showSpinner}"/>
	]]>
    <c:Spinner type="cubes" width="64" height="64" color="rgb(60, 227, 240)" show="{!v.showSpinner}"/>
     <br/>     
    <![CDATA[
    <c:Spinner type="spokes" width="64" height="64" color="rgb(34, 215, 132)" show="{!v.showSpinner}"/>
	]]>   
    <c:Spinner type="spokes" width="64" height="64" color="rgb(34, 215, 132)" show="{!v.showSpinner}"/>

    </div>
</aura:application>