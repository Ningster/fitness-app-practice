//
//  ASHealthKit.m
//  CoachApp
//
//  Created by Ning kang on 2018/11/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
//#import "HealthKit.h"
//@import HealthKit;

@interface RCT_EXTERN_MODULE(RNHealthKit, NSObject)

RCT_EXTERN_METHOD(authorize:(RCTResponseSenderBlock) callback);
//RCT_EXTERN_METHOD(authorizeHealthKit:(RCTResponseSenderBlock) callback);


@end
