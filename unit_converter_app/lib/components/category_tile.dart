import 'package:flutter/material.dart';

final _textColor = Color(0xff5e5d62);
final _fontSize = 60.0;

class CategoryTile extends StatelessWidget {
  final IconData iconLocation;
  final String name;

// TODO Make [iconlocation] to String from IconData
  const CategoryTile({
    Key key,
    @required this.iconLocation,
    @required this.name,
  })  : assert(iconLocation != null),
        assert(name != null),
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: Container(
        height: 400,
        width: 350,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              offset: Offset(0.0, 0.0),
              blurRadius: 30,
              spreadRadius: 10,
              color: Color.fromRGBO(0, 0, 0, 0.19),
            ),
          ],
          color: Color(0xfffbfbfb),
        ),
        alignment: Alignment.center,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              iconLocation,
              size: 60,
              color: Colors.blue[700],
            ),
            Text(name,
                style: TextStyle(
                  fontSize: _fontSize,
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.bold,
                  color: _textColor,
                )),
          ],
        ),
      ),
    );
  }
}
