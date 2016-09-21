#import "tuneup/tuneup_js/tuneup.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

//ignore the alert
UIATarget.onAlert = function onAlert(alert){
    var title = alert.name();
    UIALogger.logWarning("Logging: Alert with title ’" + title + "’ encountered!");
    return false; // use default handler
}

UIALogger.logStart("Logging: Start the testing...");

test("Test 1", function(target, app) {
     
     var window = app.mainWindow();
     app.logElementTree();
     
     //-- select the elements
     UIALogger.logMessage( "Logging: Select the first tab" );
     var tabBar = app.tabBar();
     var selectedTabName = tabBar.selectedButton().name();
     if (selectedTabName != "First") {
     tabBar.buttons()["First"].tap();
     }
     
     //-- tap on the text fiels
     UIALogger.logMessage( "Logging: Tap on the text field now" );
     
     var recipeName = "Unusually Long Name for a Recipe";
     window.textFields()[0].setValue(recipeName);
     
     target.delay( 2 );
     
     //-- tap on the text fiels
     UIALogger.logMessage( "Logging: Dismiss the keyboard" );
     app.logElementTree();
     app.keyboard().buttons()["Return"].tap();
     
     var textValue = window.staticTexts()["RecipeName"].value();
     
     assertEquals(recipeName, textValue);
     });

    //UIALogger.logMessage("Logging: switch APP to background");
    //target.deactivateAppForDuration(10);
    //git reabse