import 'package:flutter/material.dart';
import 'package:unitconverterapp/screens/category_screen.dart';
import 'package:provider/provider.dart';
import 'package:unitconverterapp/screens/splash_screen.dart';
import 'theme/themeChanger.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Provider.of<ThemeChanger>(context);

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: theme.themeData,
      title: 'Unit Converter',
      home: SplashScreen(),
      routes: <String, WidgetBuilder>{
        '/CategoryScreen': (BuildContext context) => CategoryScreen()
      },
    );
  }
}
