import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:provider/provider.dart';
import 'package:unito/app.dart';
import 'package:unito/component/appAds.dart';
import 'package:unito/theme/themeChanger.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  final initFuture = MobileAds.instance.initialize();
  final adManager = AddManager(initFuture);

  /// This ensures that the orientation is always portrait
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]).then(
    (_) => runApp(Provider.value(
      value: adManager,
      builder: (context, child) => Unito(),
    )),
  );
}

/// Unit Converter App.
/// Main Parent Widget
class Unito extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // This notifies the MaterialApp about the theme change
    return ChangeNotifierProvider(
      create: (context) => ThemeChanger(),
      child: Home(),
    );
  }
}
