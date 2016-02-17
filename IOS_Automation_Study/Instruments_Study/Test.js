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
if(app.windows()[0].tableViews()[1].buttons()["退出登录"].isVisible()){
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
    
    //------ Back To Homepage---------
    target.delay(2);
    app.windows()[0].buttons()["topbar close"].tap();
    target.delay(1);
    app.windows()[0].navigationBar().buttons()["topbar back normal"].tap();
    target.delay(1);
    app.windows()[0].navigationBar().buttons()["topbar back normal"].tap();
}else{
    UIALogger.logMessage("User has been Logout!");
    //------ Back To Homepage---------
    target.delay(1);
    app.windows()[0].navigationBar().buttons()["topbar back normal"].tap();
    target.delay(1);
    app.windows()[0].navigationBar().buttons()["topbar back normal"].tap();
}

//------ Logout End----------

//scroll to bottom
for(i=0;i<200;i++){
    target.dragInsideWithOptions({startOffset:{x:0.5, y:0.8}, endOffset:{x:0.5, y:0.2}, duration:1.5});
    target.delay(1);
}

target.dragInsideWithOptions({touchCount:2, startOffset:{x:0.5, y:0.8}, endOffset:{x:0.5, y:0.8}, duration:2.5});
target.delay(1);

//app.logElementTree();
//target.tapWithOptions({tapOffset:{x:0.50, y:0.60}});
target.tap({x:187, y:480});//屏幕(x,y) 坐标单击
target.delay(1);
target.tap({x:187, y:496});
