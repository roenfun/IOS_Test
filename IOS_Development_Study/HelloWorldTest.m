#import <Foundation/Foundation.h> //系统文件
#import "HelloWorld.h" //个人文件
// clang -fobjc-arc -framework Foundation HelloWorld.m HelloWorldTest.m -o HelloWorld.out

/**
############## main #################
*/
void swap(DataWarp *dw){
	int tmp = dw.a;
	dw.a = dw.b;
	dw.b = tmp;
	NSLog(@"swap函数里，属性a的值是：%d；属性b的值是：%d", dw.a, dw.b);
}

#define GIRTH(r) (2*3.14159*r)

int main(int argc, char const *argv[])
{
	@autoreleasepool
	{
		//字符串
		NSString *str = @"crazy IOS";
		NSLog(@"==%@==", str); //==crazy IOS==
		NSLog(@"周长是: %f", GIRTH(3));

		//强制类型转换
		float f1 = 100/3;
		float f2 = (float)100/3;
		float* f3;
		f3 = &f2;
		NSLog(@"%g", f1); //33
		NSLog(@"%g", f2); //33.3333
		NSLog(@"%d", (int)2.3+(int)122.2); //124

		//三目运算
		5>3? NSLog(@"5大于3"):NSLog(@"5小于3");

		DataWarp *dw = [[DataWarp alloc] init];
		dw.a =6;
		dw.b =9;
		swap(dw);
		NSLog(@"交换结束后，属性a的值是:%d, 属性b的值是：%d", dw.a, dw.b);
		NSLog(@"变量a的地址是: %p, b的地址是: %p, f3的地址是: %p", &f1, &f2, f3);

		[dw setName: @"admin"];
		[dw setPass: @"1234"];
		[dw setBirth: [NSDate date]];
		NSLog(@"管理员账号为：%@，密码为： %@，生日为： %@",
			[dw name], [dw pass], [dw birth]);

		//FKPerson实例化 类名* 变量名;
		FKPerson* persion = [[FKPerson alloc] init];
		//成员变量的用法，接口的成员变量需要定义为public
		NSLog(@"persion变量的_name实例变量：%@，persion变量的_age成员变量的值是：%d", persion->_name, persion->_age);
		persion->_name = @"罗纳尔多";
		persion->_age = 38;
		NSLog(@"重新赋值后：persion变量的_name实例变量：%@，persion变量的_age成员变量的值是：%d", persion->_name, persion->_age);

		[persion say:@"HelloWorld, I know IOS"];
		[persion setName:@"孙悟空" andAge: 500];
		
		NSString* info = [persion info];
		NSLog(@"person的info信息为：%@", info);
		[FKPerson foo]; //通过类名法调用类方法
		//[persion test]; //no visible @interface for 'FKPerson' declares the selector 'test'

		//全局变量static
		[FKPerson setNation:@"中国"];
		NSLog(@"FKPerson的nation变量为：%@", [FKPerson nation]);

		NSLog(@"检查单例的两个对象是否相等: %d", [FKPerson instance] == [FKPerson instance]);

		//继承测试
		FKAsian* asian = [[FKAsian alloc] init];
		[asian say:@"继承测试：我是亚洲人"];

		//###################### 多态测试 start ####################
		//1. 父类引用指向子类对象，向上转型，upcasting
		FKPerson* fkPerson = [[FKAsian alloc] init]; 
		[fkPerson base];
		[fkPerson test]; //执行子类重写的test方法
		//父类没有sub方法，编译错误，no visible @interface for 'FKPerson' declares the selector 'sub'
		//[fkPerson sub];
		id fkPerson2 = fkPerson; //将任何类型的指针变量赋值给id类型的变量
		[fkPerson2 sub];

		//2. 子类引用指向父类对象，向下转型，downcasting
		NSObject* obj = @"向下转型测试";
		NSString* objStr = (NSString*)obj;
		NSLog(@"objStr输出：%@",objStr);

		NSDate* date = (NSDate*)obj; //两个类间没继承关系，但编译没问题
		if ([date isKindOfClass:[NSString class]] || [[date class] isSubclassOfClass:[NSString class]]){
			NSLog(@"运行时出问题：%d", [date isEqualToDate:[NSDate date]]); //运行出问题
		}
		NSLog(@"date是否是NSString类的实例: %d", [date isKindOfClass:[NSString class]]);
		//###################### 多态测试 end ####################
	}
	return 0;
}