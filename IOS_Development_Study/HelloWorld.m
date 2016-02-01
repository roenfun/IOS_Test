// clang -fobjc-arc -framework Foundation HelloWorld.m -o HelloWorld.out
#import <Foundation/Foundation.h> //系统文件
#import "HelloWorld.h" //个人文件

//static全局变量
static NSString* nation = nil; 
static id instance = nil; 

@implementation DataWarp
@synthesize a = _a; //制定a property底层对应的成员变量名为_name
@synthesize b; //合成两个属性,合成存取方法
@synthesize name = _name; 
@synthesize pass;
@synthesize birth;

-(void) setName :(NSString*) name
{
	self->_name = [NSString stringWithFormat:@"+++%@", name];
}
@end

//实现FKPerson接口
@implementation FKPerson
{
	int _testAttr; //只能在实现部分使用的成员变量
}

- (void) setName:(NSString*) n andAge:(int) a
{
	//@public
	_name = n;
	_age = a;
}

-(void)say: (NSString*) content
{
	NSLog(@"父类的方法：%@", content);
}

-(NSString*) info
{
	[self test]; //self不能出现在类方法中
	return [NSString stringWithFormat:@"我是一个人，名字为：%@, 年龄为%d。", _name, _age];
}
-(void)test
{
	NSLog(@"---只在实现部分使用的test方法（被隐藏的方法）");
}

+(void) foo
{
	NSLog(@"FKPerson类的类方法，直接通过类名调用");
}

+ (NSString*) nation
{
	return nation; //返回nation全局变量
}

+(void) setNation: (NSString*) newNation
{
	if(![nation isEqualToString: newNation])
	{
		nation = newNation;
	}
}

+(id) instance
{
	if(!instance)
	{
		instance = [[super alloc] init];
	}
	return instance;
}

//多态测试
- (void) base
{
	NSLog(@"父类的普通base方法");
}

- (void) testPolymorphism
{
	NSLog(@"父类将被覆盖的test方法");
}
@end

//继承测试
@implementation FKAsian
//重写父类方法
-(void)say: (NSString*) content
{
	[super say:@"显式调用父类的方法"];
	NSLog(@"子类重写了父类的方法：%@", content);
}

//重写父类方法
- (void) testolymorphism
{
	NSLog(@"子类的覆盖父类的test方法");
}

- (void) sub
{
	NSLog(@"子类的sub方法");
}
@end