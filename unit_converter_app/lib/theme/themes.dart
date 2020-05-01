import 'package:flutter/material.dart';

/// Sets theme of the app
class AppTheme {
  AppTheme();

  /// Sets the Dark Theme
  ThemeData darkTheme() {
    return ThemeData.dark().copyWith(
      brightness: Brightness.dark,

      /// Color for the Category tile
      buttonColor: Color.fromARGB(14, 216, 206, 243),

      /// Background Color of the category screen
      backgroundColor: Color(0xff3a375c),
      primaryColor: Color.fromARGB(255, 40, 37, 90),
      canvasColor: Color(0xff3a376c),

      /// Background color of sub-heading in category screen
      accentColor: Color(0xffd6ceff),

      /// Icon theme
      iconTheme: IconThemeData(color: Colors.white),

      /// Splash color of category tile
      splashColor: Color(0xff7662aa),

      /// Highlight color of category tile
      highlightColor: Color(0xffac8ae8),

      /// [Gradient Color 1] for the background UI of UnitConverter Screen
      focusColor: Color.fromARGB(100, 80, 53, 232),

      /// [Gradient Color 2] for the background UI of UnitConverter Screen
      hintColor: Color.fromARGB(100, 154, 109, 252),

      textTheme: ThemeData.dark().textTheme.copyWith(
            /// Theme for UNIT CONVERTER text
            headline: TextStyle(
              fontFamily: 'Roboto_Con',
              fontSize: 50,
              fontWeight: FontWeight.bold,
              color: Colors.white,
              shadows: [
                Shadow(
                  color: Color(0xff766299),
                  offset: Offset(0.0, 0.0),
                  blurRadius: 15,
                ),
              ],
            ),

            /// Category name in the Unit Converter screen
            title: TextStyle(
              fontFamily: 'Roboto_Con',
              fontSize: 56,
              fontWeight: FontWeight.bold,
              color: Color(0xfffaf9ff),
              shadows: [
                Shadow(
                  color: Color(0xffd6e0e9),
                  offset: Offset(0.0, 0.0),
                  blurRadius: 1,
                ),
              ],
            ),

            /// Category name in Category tile
            caption: TextStyle(
              fontFamily: 'Roboto',
              fontWeight: FontWeight.bold,
              color: Color.fromARGB(255, 255, 255, 255),
              fontSize: 20,
            ),

            /// 'Select a Category' text
            subhead: TextStyle(
              fontFamily: 'Roboto',
              fontWeight: FontWeight.w700,
              fontSize: 17,
              color: Color(0xff7565c8),
            ),
          ),
      //TODO: Add other theme properties
    );
  }

  /// Sets the Light Theme
  ThemeData lightTheme() {
    return ThemeData.light().copyWith(
      brightness: Brightness.light,

      /// Background Color of category screen
      backgroundColor: Color(0xfffbfbfb),

      /// Color for the Category tile
      buttonColor: Color(0xfffbfbfb),
      primaryColor: Color(0xfffbfbfb),

      /// Canvas color of UnitConverter screen
      canvasColor: Color(0xfff5f5f5),

      /// Background color of sub-heading in category screen
      accentColor: Color(0xffd6cef3),

      /// Icon theme
      iconTheme: IconThemeData(color: Color(0xff333237)),

      /// Splash color of category tile
      splashColor: Color(0xff7662aa),

      /// Highlight color of category tile
      highlightColor: Color(0xffac8ae8),

      /// [Gradient Color 1] for the background UI of UnitConverter Screen
      focusColor: Color(0xff5035e4),

      /// [Gradient Color 2] for the background UI of UnitConverter Screen
      hintColor: Color(0xff9a6dfc),

      textTheme: ThemeData.light().textTheme.copyWith(
            /// Theme for UNIT CONVERTER text
            headline: TextStyle(
              fontFamily: 'Roboto_Con',
              fontSize: 50,
              fontWeight: FontWeight.bold,
              color: Color(0xff1d2440),
              shadows: [
                Shadow(
                  color: Color(0xffd6e0e9),
                  offset: Offset(0.0, 0.0),
                  blurRadius: 15,
                ),
              ],
            ),

            /// Category name in the Unit Converter screen
            title: TextStyle(
              fontFamily: 'Roboto_Con',
              fontSize: 56,
              fontWeight: FontWeight.bold,
              color: Color(0xfffaf9ff),
              shadows: [
                Shadow(
                  color: Color(0xffd6e0e9),
                  offset: Offset(0.0, 0.0),
                  blurRadius: 1,
                ),
              ],
            ),

            /// Category name in Category tile
            caption: TextStyle(
              fontFamily: 'Roboto',
              fontWeight: FontWeight.bold,
              color: Color(0xff404047),
              fontSize: 20,
            ),

            /// 'Select a Category' text
            subhead: TextStyle(
              fontFamily: 'Roboto',
              fontWeight: FontWeight.w700,
              fontSize: 17,
              color: Color(0xff7655c8),
            ),
          ),
    );
  }
}
