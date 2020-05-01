import 'package:flutter/material.dart';
import 'package:unitconverterapp/screens/category_screen.dart';
import 'theme/themes.dart';
import 'package:provider/provider.dart';
import 'theme/themeChanger.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeChanger>(context);
    // AppTheme appTheme = AppTheme(context: context);
    // theme.defaultTheme(appTheme.lightTheme());
    // theme.themeData = appTheme.lightTheme();
    return MaterialApp(
      // locale: DevicePreview.of(context).locale,
      // builder: DevicePreview.appBuilder,
      debugShowCheckedModeBanner: false,
      theme: theme.themeData,
      title: 'Unit Converter',
      home: CategoryScreen(),
    );
  }
}
