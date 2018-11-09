//
//  ASHealthKit.swift
//  CoachApp
//
//  Created by Ning kang on 2018/11/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation
import HealthKit


@objc(RNHealthKit)
class RNHealthKit: NSObject {

  private enum HealthkitSetupError: Error {
    case notAvailableOnDevice
    case dataTypeNotAvailable
  }
  var bridge: RCTBridge!
  let healthKitStore:HKHealthStore = HKHealthStore()
  

//  @objc(authorize:)
//  func authorize(callback:RCTResponseSenderBlock) {
//    NSLog("abcdefggg");
//      checkAuthorization(){ authorized, error in
//          NSLog(authorized ? "Authorized: Yes" : "Authorized: No");
//        callback([NSNull(), authorized]);
//      }
//    }
  @objc(authorize:)
  func authorize(callback:@escaping RCTResponseSenderBlock) {
    checkAuthorization(){ authorized, error in
      //  NSLog(authorized ? "Authorized: Yes" : "Authorized: No");
      callback([NSNull(), authorized]);
    }
  }
  
  
//  @objc(authorizeHealthKit:)
  func checkAuthorization(completion: @escaping (Bool, Error?) -> Swift.Void) {
    
    //1. Check to see if HealthKit Is Available on this device
    guard HKHealthStore.isHealthDataAvailable() else {
      completion(false, HealthkitSetupError.notAvailableOnDevice)
      return
    }
    NSLog("Yes, HealthKit is Available on this device!");
    
    //2. Prepare the data types that will interact with HealthKit
    guard   let dateOfBirth = HKObjectType.characteristicType(forIdentifier: .dateOfBirth),
      let stepCount = HKObjectType.quantityType(forIdentifier: .stepCount),
      let activeEnergy = HKObjectType.quantityType(forIdentifier: .activeEnergyBurned) else {

        completion(false, HealthkitSetupError.dataTypeNotAvailable)
        return
    }
    NSLog("OK, The data types to interact with HealthKit are prepared!");
    
    //3. Prepare a list of types you want HealthKit to read and write
    let healthKitTypesToWrite: Set<HKSampleType> = [activeEnergy,
                                                    HKObjectType.workoutType()]
    
    let healthKitTypesToRead: Set<HKObjectType> = [dateOfBirth,
                                                   stepCount,
                                                   HKObjectType.workoutType()]
    NSLog("Good, read/write type is set !");
    
    //4. Request Authorization
    HKHealthStore().requestAuthorization(toShare: healthKitTypesToWrite,
                                         read: healthKitTypesToRead) { (success, error) in
                                          completion(success, error)
    }
    NSLog("Fantastic, ask for user authorization !");
    
  }

}


