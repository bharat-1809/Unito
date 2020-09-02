import 'dart:io';

class AddManager {
  static String get appId {
    if (Platform.isAndroid) {
      return  "ca-app-pub-1828204131712236~3033530989";//"ca-app-pub-3940256099942544~4354546703";
    } else if (Platform.isIOS) {
      return "APPSTORE_KEY";
    } else {
      throw UnsupportedError("Unsupported Platform");
    }
  }

  static String get bannerAdUnitId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/2650387606";//"ca-app-pub-3940256099942544/8865242552";
    } else if (Platform.isIOS) {
      return "IOS_BANNER_KEY";
    } else {
      throw UnsupportedError("Unsupported Platform");
    }
  }

  static String get interstitialAdUnitId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/8318238523";
    } else if (Platform.isIOS) {
      return "IOS_INTERSTITIAL_AD_ID";
    } else {
      throw new UnsupportedError("Unsupported platform");
    }
  }
}
