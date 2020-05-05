import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:unitconverterapp/app.dart';
import 'package:device_preview/device_preview.dart';
import 'package:unitconverterapp/theme/themeChanger.dart';

void main() => runApp(
      // UnitConverterApp(),
      DevicePreview(
        builder: (context) => UnitConverterApp(),
      ),
    );

/// Unit Converter App.
/// Main Parent Widget
class UnitConverterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => ThemeChanger(),
      child: Home(),
    );
  }
}
