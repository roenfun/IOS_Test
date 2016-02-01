#import <Foundation/Foundation.h>

@interface DataWarp : NSObject
@property (nonatomic) int a; //nonatomic 线程不安全，性能好
@property int b;
@property (nonatomic) NSString* name;
@property NSString* pass;
@property NSDate* birth;

-(void) setName :(NSString*) name;
@end

@interface FKPerson : NSObject
{
	int _count; //成员变量加 _
	id _data;
	//定义两个实例变量
	@public
	NSString* _name;
	int _age;
}
-(void)setName:(NSString*) name andAge:(int) age; //实例方法，必须用对象调用
-(void)say:(NSString*) content;
-(NSString*)info;
+(void)foo; //类方法，直接用类名调用
+(NSString*) nation;
+(void) setNation: (NSString*) newNation;
+(id) instance; //单例

//多态测试
- (void) base;
- (void) testPolymorphism;
@end

//继承测试
@interface FKAsian : FKPerson
- (void) sub; //覆盖父类中的test方法
@end