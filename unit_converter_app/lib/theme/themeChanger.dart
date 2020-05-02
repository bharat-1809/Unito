import 'package:flutter/material.dart';
import 'package:unitconverterapp/theme/themes.dart';
AppTheme appTheme = AppTheme();
/// Changes the theme of the app
class ThemeChanger with ChangeNotifier {

  ThemeData _themeData = appTheme.getLightTheme();

  ThemeData get themeData => _themeData;

  defaultTheme(ThemeData value) {
    _themeData = value;
  }

  set themeData(ThemeData newValue) {
    _themeData = newValue;
    notifyListeners();
  }
}
