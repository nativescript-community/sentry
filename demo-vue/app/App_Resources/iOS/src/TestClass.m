#import "TestClass.h"

@implementation TestClass

+(void)someMethod {
    NSMutableDictionary *result = [NSMutableDictionary dictionary];
    [result setObject:nil forKey:@"test"];
    NSLog(@"%@", result);
}


+(void)helloWorld: (NSString* ) message  {
    @throw [NSException exceptionWithName:message
                               reason:@"reason"
                             userInfo:nil];
}
@end