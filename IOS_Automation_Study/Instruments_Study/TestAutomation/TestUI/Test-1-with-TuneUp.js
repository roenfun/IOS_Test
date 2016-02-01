#import "tuneup/tuneup.js"

test("Test 1", function(target, app) {
     
	 target.logDevice();
	 
     var window = app.mainWindow();
     app.logElementTree();
     
     //-- select the elements
     UIALogger.logMessage( "Select the first tab" );
     var tabBar = app.tabBar();
     var selectedTabName = tabBar.selectedButton().name();
     if (selectedTabName != "First") {
        tabBar.buttons()["First"].tap();
     }
     
     //-- tap on the text fiels
     UIALogger.logMessage( "Tap on the text field now" );
     
     var recipeName = "Unusually Long Name for a Recipe";
     window.textFields()[0].setValue(recipeName);
     
     target.delay( 2 );
     
     //-- tap on the text fiels
     UIALogger.logMessage( "Dismiss the keyboard" );
     app.logElementTree();
     app.keyboard().buttons()["return"].tap();
	 
	 var textValue = window.staticTexts()["RecipeName"].value();

	 assertEquals(recipeName, textValue);
});


