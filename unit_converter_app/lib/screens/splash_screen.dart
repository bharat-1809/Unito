import 'dart:async';

import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/material.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  /// Method to display [SplashScreen] for the given duration
  startTime() async {
    var _duration = Duration(seconds: 2);
    return Timer(_duration, navigationPage);
  }

  /// Callback to navigate to the main screen i.e [CategoryScreen]
  void navigationPage() {
    Navigator.of(context).pushReplacementNamed('/CategoryScreen');
  }

  @override
  void initState() {
    super.initState();
    startTime();
  }

  @override
  Widget build(BuildContext context) {
    final _height = MediaQuery.of(context).size.height;
    final _width = MediaQuery.of(context).size.width;
    return Container(
      width: _width,
      height: _height,
      color: Colors.white,
      child: Center(
        child: Container(
          width: _height / 2,
          height: _height / 2,
          child: FlareActor(
            'assets/flare/splash.flr',
            alignment: Alignment.center,
            animation: 'jump',
            fit: BoxFit.contain,
          ),
        ),
      ),
    );
  }
}
