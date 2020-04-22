import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/category.dart';

final _backgroundColor = Color(0xfffbfbfb);
final _textColor = Color(0xff404047);
final _borderRadius = BorderRadius.circular(12.5);
final _padding8 = EdgeInsets.all(8.0);
final _splashColor = Color(0xff7662aa);
final _highlightColor = Color(0xffac8ae8);

class CategoryTile extends StatelessWidget {
  final Category category;

  const CategoryTile({
    Key key,
    @required this.category,
  })  : assert(category != null),
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: _padding8,
      child: Container(
        height: 145,
        width: 135,
        decoration: BoxDecoration(
          color: _backgroundColor,
          borderRadius: _borderRadius,
          boxShadow: [
            BoxShadow(
              color: Color.fromRGBO(46, 46, 46, 0.05),
              offset: Offset(0.0, 0.0),
              spreadRadius: 5,
              blurRadius: 10,
            ),
          ],
        ),
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: () {},
            borderRadius: _borderRadius,
            splashColor: _splashColor,
            highlightColor: _highlightColor,
            child: Padding(
              padding: const EdgeInsets.all(5.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SizedBox(height: 2.0),
                  Padding(
                    padding: _padding8,
                    child: Image.asset(
                      category.iconLocation,
                      height: 65,
                      width: 65,
                    ),
                  ),
                  SizedBox(height: 2.0),
                  Text(
                    category.name,
                    style: TextStyle(
                      fontFamily: 'Roboto',
                      fontWeight: FontWeight.bold,
                      color: _textColor,
                      fontSize: 20,
                    ),
                  ),
                  SizedBox(height: 5.0),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
