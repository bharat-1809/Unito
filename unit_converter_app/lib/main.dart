import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:unitconverterapp/app.dart';
import 'package:unitconverterapp/theme/themeChanger.dart';

void main() {
  /// This ensures that the orientation is always portrait
  // TODO: Add landscpae mode functionality in the near future
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((_) => runApp(
            UnitConverterApp(),
          ));
}

/// Unit Converter App.
/// Main Parent Widget
class UnitConverterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // This notifies the MaterialApp about the theme change
    return ChangeNotifierProvider(
      create: (context) => ThemeChanger(),
      child: Home(),
    );
  }
}
