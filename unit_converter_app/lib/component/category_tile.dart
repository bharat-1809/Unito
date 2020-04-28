import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/category.dart';
import 'package:unitconverterapp/screens/unit_screen.dart';

final _backgroundColor = Color(0xfffbfbfb);
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
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    void _openConverterRoute() {
      Navigator.push(context,
          MaterialPageRoute(builder: (BuildContext context) {
        return UnitConverter();
      }));
    }

    return Padding(
      padding: _padding8,
      child: Container(
        height: 0.16121346886912325798 * height,
        width: 0.15009529860228717122 * height,
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
            onTap: () {
              _openConverterRoute();
              print('Height: $height || Width: $width');
            },
            borderRadius: _borderRadius,
            splashColor: _splashColor,
            highlightColor: _highlightColor,
            child: Padding(
              padding: const EdgeInsets.all(5.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SizedBox(height: 0.00222363405336721735 * height),
                  Padding(
                    padding: _padding8,
                    child: Image.asset(
                      category.iconLocation,
                      height: 0.07226810673443456392 * height,
                      width: 0.07226810673443456392 * height,
                    ),
                  ),
                  SizedBox(height: 0.00222363405336721735 * height),
                  Text(
                    category.name,
                    style: Theme.of(context).textTheme.caption,
                  ),
                  SizedBox(height: 0.00555908513341804338 * height),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
