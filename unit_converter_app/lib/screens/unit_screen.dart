import 'package:flutter/material.dart';

// Unit Converter Page
class UnitConverter extends StatefulWidget {
  @override
  _UnitConverterState createState() => _UnitConverterState();
}

class _UnitConverterState extends State<UnitConverter> {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.height;
    final height = MediaQuery.of(context).size.width;
    final bgUIRotation = 15; // Rotation angle for background UI container

// UI Design (Top of the stack)
    Widget _topDesign() {
      return Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(height: 35),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                IconButton(
                    icon: Icon(
                      Icons.arrow_back,
                      size: 30,
                      color: Colors.white,
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    }),
                SizedBox(width: width / 3.8),
                Image.asset(
                  'assets/icons/fourW.png',
                  height: 25,
                  width: 25,
                ),
                SizedBox(width: 0.0),
              ],
            ),
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
          color: Color(0xfffbfbfb),
        ),
        Positioned(
          top: -200.0,
          right: 80,
          child: Container(
            height: 2 * height,
            width: width,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [Color(0xff5035e4), Color(0xff9a6dfc)], begin: Alignment(0.8,1.5), end: Alignment.topLeft,),
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