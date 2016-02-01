//
//  SecondViewController.h
//  TestAutomation
//
//  Created by Jean-Christophe Amiel on 1/9/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SecondViewController : UIViewController<UITextFieldDelegate>

@property(nonatomic, strong) IBOutlet UITextField *digitTextField;
@property(nonatomic, strong) IBOutlet UIImageView *lastDigitView; 

@end
