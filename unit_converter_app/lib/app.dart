import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:unitconverterapp/screens/category_screen.dart';
import 'package:provider/provider.dart';
import 'theme/themeChanger.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeChanger>(context);

    return MaterialApp(
      locale: DevicePreview.of(context).locale,
      builder: DevicePreview.appBuilder,
      debugShowCheckedModeBanner: false,
      // darkTheme: appTheme.getDarkTheme(),
      theme: theme.themeData,
      title: 'Unit Converter',
      home: CategoryScreen(),
    );
  }
}
