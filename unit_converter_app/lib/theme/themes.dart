import 'package:flutter/material.dart';

/// Sets theme of the app
class AppTheme {
  BuildContext context;

  AppTheme({
    @required this.context,
  });

  /// Sets the Dark Theme
  ThemeData darkTheme() {
    return Theme.of(context).copyWith(
      brightness: Brightness.dark,
      buttonColor: Color.fromARGB(14, 216, 206, 243),
      backgroundColor:
          Color(0xff3a375c), // Background Color of the category screen
      primaryColor: Color(0xff12035e),
      canvasColor: Color(0xff3a376c),
      accentColor: Color(
          0xffd6ceff), // Background color of sub-heading in category screen
      iconTheme: IconThemeData(color: Colors.white), // Icon theme
      splashColor: Color(0xff7662aa), // Splash color of category tile
      highlightColor: Color(0xffac8ae8), // Highlight color of category tile

      textTheme: Theme.of(context).textTheme.copyWith(
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
    return Theme.of(context).copyWith(
      brightness: Brightness.light,
      backgroundColor: Color(0xfffbfbfb), // Background Color of category screen
      buttonColor: Color(0xfffbfbfb),
      primaryColor: Color(0xff3b3865),
      canvasColor: Color(0xfff5f5f5), // Canvas color of UnitConverter screen
      accentColor: Color(
          0xffd6cef3), // Background color of sub-heading in category screen
      iconTheme: IconThemeData(color: Color(0xff333237)), // Icon theme
      splashColor: Color(0xff7662aa), // Splash color of category tile
      highlightColor: Color(0xffac8ae8), // Highlight color of category tile
      textTheme: Theme.of(context).textTheme.copyWith(
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
