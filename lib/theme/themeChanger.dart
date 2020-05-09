import 'package:flutter/material.dart';
import 'package:unitconverterapp/theme/themes.dart';

AppTheme appTheme = AppTheme();

/// Changes the theme of the app
class ThemeChanger with ChangeNotifier {
  /// Initializes and declare [_themeData] property with a given [ThemeData]
  ThemeData _themeData = appTheme.getLightTheme();

  /// Getter method to get the value of [_themeData]
  ThemeData get themeData => _themeData;

  /// Setter method to set the value of [_themeData]
  set themeData(ThemeData newValue) {
    _themeData = newValue;
    // This notifies listeners
    notifyListeners();
  }
}
