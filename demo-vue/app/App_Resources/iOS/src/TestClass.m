#import "TestClass.h"

@implementation TestClass

+(void)someMethod {
    NSMutableDictionary *result = [NSMutableDictionary dictionary];
    [result setObject:nil forKey:@"test"];
    NSLog(@"%@", result);
}

@end