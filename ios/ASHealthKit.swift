//
//  ASHealthKit.swift
//  CoachApp
//
//  Created by Ning kang on 2018/11/8.
//  Copyright © 2018年 Facebook. All rights reserved.
//

import Foundation
import CoreMotion
// CalendarManager.swift

@objc(RNHealthKit)
class RNHealthKit: RCTEventEmitter {

  private let pedometer = CMPedometer()
  
  @objc override func supportedEvents() -> [String] {
    return ["EventStep"];
  }

  private func checkAuthorizationStatus() {
    switch CMPedometer.authorizationStatus() {
      case CMAuthorizationStatus.notDetermined:
        NSLog("StepCountingAuth is notDetermined")
      case CMAuthorizationStatus.restricted:
        NSLog("StepCountingAuth is restricted")
      case CMAuthorizationStatus.authorized:
        NSLog("StepCountingAuth is authorized")
      case CMAuthorizationStatus.denied:
        NSLog("StepCountingAuth is denied")
      default:break
    }
  }

  private func startUpdating() {
    if CMPedometer.isStepCountingAvailable() {
      startCountingSteps()
    } else {
      NSLog("StepCounting is not available")
    }
  }

  private func startCountingSteps() {
    pedometer.startUpdates(from: Date()) {
      pedometerData, error in
      guard let pedometerData = pedometerData, error == nil else { return }
      NSLog("numberOfSteps is : "+pedometerData.numberOfSteps.stringValue)
      self.sendEvent(withName: "EventStep", body: pedometerData.numberOfSteps.stringValue)
    }
  }
  @objc(authorize)
  func authorize() {
    checkAuthorizationStatus()
    startUpdating() // It seems the Core Motion service stops if the authorization is denied.
  }
  
}

//import Foundation
//import CoreMotion

//
//@objc(RNHealthKit)
//class RNHealthKit: NSObject {
//  private let pedometer = CMPedometer()
//
//  private func checkAuthorizationStatus() {
//    switch CMPedometer.authorizationStatus() {
//      case CMAuthorizationStatus.notDetermined:
//        NSLog("StepCountingAuth is notDetermined")
//      case CMAuthorizationStatus.restricted:
//        NSLog("StepCountingAuth is restricted")
//      case CMAuthorizationStatus.authorized:
//        NSLog("StepCountingAuth is authorized")
//      case CMAuthorizationStatus.denied:
//        NSLog("StepCountingAuth is denied")
//      default:break
//    }
//  }
//
//  private func startUpdating(callback:@escaping RCTResponseSenderBlock) {
//    if CMPedometer.isStepCountingAvailable() {
//      startCountingSteps(callback:callback)
//    } else {
//      NSLog("StepCounting is not available")
//    }
//  }
//
//  private func startCountingSteps(callback:@escaping RCTResponseSenderBlock) {
//    pedometer.startUpdates(from: Date()) {
//      pedometerData, error in
//      guard let pedometerData = pedometerData, error == nil else { return }
//      NSLog("numberOfSteps is : "+pedometerData.numberOfSteps.stringValue)
//      callback([pedometerData.numberOfSteps.stringValue]);
//    }
//  }
//
//  @objc(authorize:)
//  func authorize(callback:@escaping RCTResponseSenderBlock) {
//    checkAuthorizationStatus()
//    startUpdating(callback:callback) // It seems the Core Motion service stops if the authorization is denied.
//  }
//}


