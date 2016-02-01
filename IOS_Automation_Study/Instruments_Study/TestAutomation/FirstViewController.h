//
//  FirstViewController.h
//  TestAutomation
//
//  Created by Jean-Christophe Amiel on 1/9/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface FirstViewController : UIViewController<UITextFieldDelegate>

@property (nonatomic, copy) NSString *someText;
@property (nonatomic, strong) IBOutlet UILabel *someTextLabel; 

@end
