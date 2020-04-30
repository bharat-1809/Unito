import 'package:flutter/material.dart';

/// Changes the theme of the app
class ThemeChanger with ChangeNotifier {
  /// Theme data
  ThemeData _themeData;

  ThemeChanger(this._themeData);

  /// Gets the current theme
  getTheme() => _themeData;

  /// Sets the theme
  setTheme(ThemeData theme) {
    _themeData = theme;
  }

  /// Notifies listeners
  @override
  void notifyListeners() {
    // TODO: implement notifyListeners
    super.notifyListeners();
  }
}
