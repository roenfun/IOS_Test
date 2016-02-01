
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();

app.logElementTree();

//click first Tab Button
var firstTabButton = app.tabBar().buttons()["First"];
firstTabButton.tap();

//input sth
var inputTextBox = window.textFields()["User Text"].textFields()["User Text"];
inputTextBox.tap();
app.keyboard().typeString("test\n");

UIATarget.delay(1);

//the input text displayed
var textToBeDisplayed = window.staticTexts()["RecipeName"];
//.tapWithOptions({tapOffset:{x:0.09, y:0.73}});