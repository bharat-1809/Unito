import 'package:flutter/material.dart';

// Unit Converter Page
class UnitConverter extends StatefulWidget {
  @override
  _UnitConverterState createState() => _UnitConverterState();
}

class _UnitConverterState extends State<UnitConverter> {
  final headText = TextStyle(
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
  );

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.height;
    final height = MediaQuery.of(context).size.width;
    final bgUIRotation = 15; // Rotation angle for background UI container

    Widget unitInputContainer() {
      return Container(
        margin: EdgeInsets.all(5.0),
        padding: EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          color: Color(0xfffbfbfb),
          borderRadius: BorderRadius.circular(8),
          boxShadow: [
            BoxShadow(
              color: Color.fromRGBO(46, 46, 46, 0.05),
              offset: Offset(0.0, 0.0),
              spreadRadius: 5,
              blurRadius: 10, 
            ),
          ],
        ),
        height: 1.2 * height,
        width: width / 2.7,
      );
    }

// UI Design (Top of the stack)
    Widget _topDesign() {
      return Container(
        color: Colors.transparent,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(height: 35), // Used for spacing
            // Top Icon Row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                SizedBox(width: width / 50),

                // Back Icon
                IconButton(
                    icon: Icon(
                      Icons.arrow_back,
                      size: 30,
                      color: Colors.white,
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    }),
                SizedBox(width: width / 4),

                // Menu Icon
                FlatButton(
                  highlightColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  padding: EdgeInsets.all(0),
                  onPressed: () {},
                  child: Image.asset(
                    'assets/icons/fourW.png',
                    height: 25,
                    width: 25,
                  ),
                ),
                SizedBox(width: 0.0),
              ],
            ),
            SizedBox(height: 60),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                SizedBox(width: 0.0),
                Text("Length", style: headText),
                SizedBox(width: 13.5),
                Image.asset(
                  'assets/icons/length2.png',
                  height: 100,
                  width: 100,
                ),
                SizedBox(width: 0.0),
              ],
            ),
            SizedBox(height: height / 4.8),
            unitInputContainer(),
          ],
        ),
      );
    }

// Background UI Widget ( the design one )
    Widget _backgroundUI() {
      return Stack(children: [
        Container(
          height: height,
          width: width,
          color: Color(0xfff5f5f5),
        ),
        Positioned(
          top: -200.0,
          right: 80,
          child: Container(
            height: 2 * height,
            width: width,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Color(0xff5035e4), Color(0xff9a6dfc)],
                begin: Alignment(0.8, 1.5),
                end: Alignment.topLeft,
              ),
            ),
            transform: Matrix4.rotationZ(-bgUIRotation * 0.0174533),
          ),
        ),
      ]);
    }

    return Scaffold(
      body: SafeArea(
        child: Stack(
          fit: StackFit.expand,
          children: <Widget>[
            _backgroundUI(),
            _topDesign(),
          ],
        ),
      ),
    );
  }
}
