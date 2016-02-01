//#import "tuneup/tuneup_js/tuneup.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

UIALogger.logStart("Logging: Start the testing...");

target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);

window.logElementTree();
target.delay(5);

app.windows()[0].buttons()["icon float user normal"].tap();
app.windows()[0].navigationBar().buttons()["topbar setup normal"].tap();

//------ Logout Start---------
app.windows()[0].tableViews()[1].buttons()["退出登录"].tap();
// Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
UIATarget.onAlert = function onAlert(alert) {
    var title = alert.name;
    UIALogger.logMessage("Alert with title '" + title + "' encountered.");
    UIALogger.logDebug( "confirm to logout..." );
    target.frontMostApp().alert().buttons()["确定"].tap();
    
    return true; //处理警告,返回true,跳过默认的处理方法
    //return false;//返回false,使用默认的处理方法.
}
//------ Logout End----------

//------ Back To Homepage---------
target.frontMostApp().windows()[0].buttons()["topbar close"].tap();
target.delay(1);
target.frontMostApp().windows()[0].navigationBar().buttons()["topbar back normal"].tap();
target.delay(1);
target.frontMostApp().windows()[0].navigationBar().buttons()["topbar back normal"].tap();

//scroll to buttom
for(i=0;i<200;i++){
    target.dragInsideWithOptions({startOffset:{x:0.5, y:0.8}, endOffset:{x:0.5, y:0.2}, duration:1.5});
    target.delay(1);
}
