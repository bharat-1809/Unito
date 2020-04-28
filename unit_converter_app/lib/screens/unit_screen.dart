import 'package:flutter/material.dart';

// Unit Converter Page
class UnitConverter extends StatefulWidget {
  @override
  _UnitConverterState createState() => _UnitConverterState();
}

class _UnitConverterState extends State<UnitConverter> {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
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
        height: 1.2 * width,
        width: height / 2.7,
      );
    }

// UI Design (Top of the stack)
    Widget _topDesign() {
      return Container(
        color: Colors.transparent,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            SizedBox(
                height: 0.03891359593392630365 * height), // Used for spacing
            // Top Icon Row
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                SizedBox(width: height / 50),

                // Back Icon
                IconButton(
                    icon: Icon(
                      Icons.arrow_back,
                      size: 0.03335451080050826027 * height,
                      color: Colors.white,
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                    }),
                SizedBox(width: height / 4),

                // Menu Icon
                FlatButton(
                  highlightColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  padding: EdgeInsets.all(0),
                  onPressed: () {
                    print('Heigth: $height || Width: $width');
                  },
                  child: Image.asset(
                    'assets/icons/fourW.png',
                    height: 0.02779542566709021689 * height,
                    width: 0.02779542566709021689 * height,
                  ),
                ),
                SizedBox(width: 0.0),
              ],
            ),
            SizedBox(height: 0.06570902160101652054 * height),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                SizedBox(width: 0.0),
                Text(
                  "Length",
                  style: Theme.of(context)
                      .textTheme
                      .title
                      .copyWith(fontSize: 0.06226175349428208584 * height),
                ),
                SizedBox(width: 0.03281249999999999909 * width),
                Image.asset(
                  'assets/icons/length2.png',
                  height: 0.11118170266836086757 * height,
                  width: 0.11118170266836086757 * height,
                ),
                SizedBox(width: 0.0),
              ],
            ),
            SizedBox(height: width / 5),
            unitInputContainer(),
          ],
        ),
      );
    }

// Background UI Widget ( the design one )
    Widget _backgroundUI() {
      return Stack(children: [
        Container(
          height: height * 0.96,
          width: width,
          color: Color(0xfff5f5f5),
        ),
        Positioned(
          top: -(0.22236340533672173514 * height),
          right: 0.08894536213468869406 * height,
          child: Container(
            height: 2 * width,
            width: height,
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
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xff5035e4), Color(0xff9a6dfc), Color(0xff5035e4), Color(0xff9a6dfc),],
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
          ),
        ),
        child: SafeArea(
          child: CustomScrollView(
            shrinkWrap: true,
            slivers: <Widget>[
              SliverList(
                  delegate: SliverChildListDelegate([
                Stack(
                  // fit: StackFit.expand,
                  children: <Widget>[
                    // Container(height: 2000),
                    _backgroundUI(),
                    _topDesign(),
                  ],
                ),
              ])),
            ],
          ),
        ),
      ),
    );
  }
}
