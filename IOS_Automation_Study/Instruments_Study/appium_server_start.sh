
#!/bin/sh
APPIUM_HOME=/Applications/Appium.app/Contents/Resources/node_modules/appium/bin

echo "kill Simulator..."
killall -9 "Simulator"
echo "kill node..."
killall -9 node
echo "kill instruments..."
killall -9 instruments

echo "start appium_server"
cd $APPIUM_HOME
path=`date +%F" "%T`
node appium --command-timeout "7200" --session-override --platform-version "8.4" --platform-name "iOS" --app "/Users/apptest1/Desktop/Spec.app" --no-reset --device-name "iPhone 6" --launch-timeout "90000" --native-instruments-lib &> /Users/apptest1/Desktop/appium_log/$path-$*.log &

echo "wait for the server startup..."
sleep 30

a=`ps -ef | grep -v 'grep' | grep node | awk -F" " '{print $2}'`
echo "appium-pid:" $a

#echo "mvn clean"
#cd /Users/autotest/Documents/Jenkins/workspace/CI_iPhone_SmokingTest
#mvn clean