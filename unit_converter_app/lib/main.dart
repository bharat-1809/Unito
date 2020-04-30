import 'package:flutter/material.dart';
import 'package:unitconverterapp/screens/category_screen.dart';
import 'package:device_preview/device_preview.dart';
import 'package:unitconverterapp/themes.dart';

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
    AppTheme appTheme = AppTheme(context: context);

    return MaterialApp(
      locale: DevicePreview.of(context).locale,
      builder: DevicePreview.appBuilder,
      debugShowCheckedModeBanner: false,

      /// DARK THEME
      darkTheme: appTheme.darkTheme(),

      /// LIGHT THEME
      theme: appTheme.lightTheme(),
      title: 'Unit Converter',
      home: CategoryScreen(),
    );
  }
}
