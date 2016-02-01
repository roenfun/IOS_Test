#import "tuneup/tuneup.js"


test("Test 2", function(target, app) {

	var window = app.mainWindow();
	
	app.logElementTree();
	 
	//-- select the elements
	UIALogger.logMessage( "Select the second tab" );
	
	var tabBar = app.tabBar();
	var selectedTabName = tabBar.selectedButton().name();
	if (selectedTabName != "Second") {
		tabBar.buttons()["Second"].tap();
	}
	
	var digit;
	for (digit=0; digit<=9; digit++){

		//-- tap on the text fiels
		window.textFields()[0].setValue(digit);
		UIALogger.logMessage( "Tap on the text field: " + digit );

		target.delay( 2 );

		//-- tap on the text fiels
		UIALogger.logMessage( "Dismiss the keyboard" );
		target.tap({x:160, y:40});

		target.delay( 2 );

		//UIALogger.logMessage( "Image name= " + window.images()[0].name());
		UIALogger.logMessage( "Image " + window.images()[0].name() + "isVisible: " + window.images()[0].isValid());
	
		if (window.images()[0].value() != digit){
			UIALogger.logFailed( testName ); 
		}
		else{
			target.captureScreenWithName("tmp");
		}
	}
	 
});



