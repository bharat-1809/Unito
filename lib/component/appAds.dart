import 'dart:io';

import 'package:google_mobile_ads/google_mobile_ads.dart';

class AddManager {
  AddManager(this.initialization);
  InitializationStatus initialization;

  String get appId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236~3033530989";
    } else if (Platform.isIOS) {
      return "APPSTORE_KEY";
    } else {
      throw UnsupportedError("Unsupported Platform");
    }
  }

  String get homeBannerAdId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/2650387606";
    } else if (Platform.isIOS) {
      return "IOS_BANNER_KEY";
    } else {
      throw UnsupportedError("Unsupported Platform");
    }
  }

  String get unitBannerAdId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/8522925412";
    } else if (Platform.isIOS) {
      return "IOS_BANNER_KEY";
    } else {
      throw UnsupportedError("Unsupported Platform");
    }
  }

  String get themeInterstitialAdId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/8318238523";
    } else if (Platform.isIOS) {
      return "IOS_INTERSTITIAL_AD_ID";
    } else {
      throw new UnsupportedError("Unsupported platform");
    }
  }

  String get aboutInterstitialAdId {
    if (Platform.isAndroid) {
      return "ca-app-pub-1828204131712236/1957517061";
    } else if (Platform.isIOS) {
      return "IOS_INTERSTITIAL_AD_ID";
    } else {
      throw new UnsupportedError("Unsupported platform");
    }
  }

  String get testBanerAdId => 'ca-app-pub-3940256099942544/6300978111';
  String get testInterstitialAdId => 'ca-app-pub-3940256099942544/1033173712';

  AdListener get adListener => _adListener;

  final AdListener _adListener = AdListener(
    // Called when an ad is successfully received.
    onAdLoaded: (Ad ad) => print('Ad--${ad.adUnitId} loaded.'),
    // Called when an ad request failed.
    onAdFailedToLoad: (Ad ad, LoadAdError error) {
      ad.dispose();
      print('Ad--${ad.adUnitId} failed to load: $error');
    },
    // Called when an ad opens an overlay that covers the screen.
    onAdOpened: (Ad ad) => print('Ad--${ad.adUnitId} opened.'),
    // Called when an ad removes an overlay that covers the screen.
    onAdClosed: (Ad ad) {
      print('Ad--${ad.adUnitId} closed.');
      if (ad is InterstitialAd) {
        ad.dispose();
        ad.load();
      }
    },
    // Called when an ad is in the process of leaving the application.
    onApplicationExit: (Ad ad) => print('Ad--${ad.adUnitId} ---- Left application.'),
  );
}
