//#import "tuneup/tuneup_js/tuneup.js"
//test git rebase

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

//--------- objects start-----------
var oUserFloatIcon = app.windows()[0].buttons()["icon float user normal"];

//--------- objects end-------------

UIALogger.logStart("Logging: Start the testing...");

target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);

//window.logElementTree();
target.delay(5);

//navigate to Setting page
oUserFloatIcon.tap();
target.delay(1);
//app.windows()[0].navigationBar().logElementTree();
var oSettingIcon = app.windows()[0].navigationBar().buttons()["topbar setup normal"];
oSettingIcon.tap();

//------ Logout Start---------
var oLogoutBtn =  app.windows()[0].tableViews()[1].buttons()["退出登录"];
if(oLogoutBtn.isVisible()){
    oLogoutBtn.tap();
    // Alert detected. Expressions for handling alerts should be moved into the UIATarget.onAlert function definition.
    UIATarget.onAlert = function onAlert(alert) {
        var title = alert.name;
        UIALogger.logMessage("Debug: Alert with title '" + title + "' encountered.");
        UIALogger.logDebug( "Debug: confirm to logout..." );
        target.frontMostApp().alert().buttons()["确定"].tap();
        
        return true; //处理警告,返回true,跳过默认的处理方法
        //return false;//返回false,使用默认的处理方法.
    }
    
    //------ Back To Homepage---------
    var oBackArrow = app.windows()[0].navigationBar().buttons()["topbar back normal"];
    target.delay(2);
    var oCloseIcon = app.windows()[0].buttons()["topbar close"];
    oCloseIcon.tap();
    target.delay(1);
    var oBackArrow = app.windows()[0].navigationBar().buttons()["topbar back normal"];
    oBackArrow.tap();
}else{
    UIALogger.logMessage("Debug: User has been Logout...");
    //------ Back To Homepage---------
    target.delay(1);
    var oBackArrow = app.windows()[0].navigationBar().buttons()["topbar back normal"];
    oBackArrow.tap();
    target.delay(1);
    var oBackArrow = app.windows()[0].navigationBar().buttons()["topbar back normal"];
    oBackArrow.tap();
}

//------ Logout End----------

//scroll to bottom
UIALogger.logDebug( "Debug: scroll to bottom..." );
for(i=0;i<4;i++){
    UIALogger.logDebug( "<Debug>: scroll count: " + i );
    target.dragInsideWithOptions({startOffset:{x:0.5, y:0.8}, endOffset:{x:0.5, y:0.2}, duration:1.5});
    target.delay(1);
}

//scroll to top
UIALogger.logDebug( "Debug: scroll to top..." );
target.touchAndHold({x:344, y:642}, 3);
target.delay(2);
app.windows()[0].staticTexts()[3].tap();
//target.tap({x:344, y:642});//屏幕(x,y) 坐标单击

target.delay(5);

//screen capture
target.dragInsideWithOptions({touchCount:2, startOffset:{x:0.5, y:0.8}, endOffset:{x:0.5, y:0.8}, duration:2.5});
target.delay(2);
//app.logElementTree();
target.tap({x:187, y:480});//屏幕(x,y) 坐标单击
target.delay(2);
target.tap({x:187, y:496});
