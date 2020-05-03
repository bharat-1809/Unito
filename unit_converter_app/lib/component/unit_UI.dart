import 'package:flutter/material.dart';

/// Background UI Widget ( the design one )
class UnitUI extends StatefulWidget {
  const UnitUI();
  @override
  _UnitUIState createState() => _UnitUIState();
}

class _UnitUIState extends State<UnitUI> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width ,
      color: Theme.of(context).canvasColor,
      child: Center(
        child: ClipPath(
          clipBehavior: Clip.antiAlias,
          clipper: CustomPath(),
          child: Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  Theme.of(context).hintColor,
                  Theme.of(context).focusColor,
                ],
                begin: Alignment.topLeft,
                end: Alignment.centerRight,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class CustomPath extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    final path = Path();
    path.lineTo(size.width, 0.0);
    path.lineTo(size.width, 2 * size.height / 5);
    path.lineTo(0.0, 3.1 * size.height / 6);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(CustomPath oldClipper) => false;
}
