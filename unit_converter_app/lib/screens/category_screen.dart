import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:unitconverterapp/component/category.dart';
import 'package:unitconverterapp/component/category_tile.dart';

class CategoryScreen extends StatefulWidget {
  const CategoryScreen();
  @override
  _CategoryScreenState createState() => _CategoryScreenState();
}

class _CategoryScreenState extends State<CategoryScreen> {
  final _categories = <Category>[];

  static const _categoryNames = <String>[
    'Length',
    'Area',
    'Volume',
    'Weight',
    'Data',
    'Currency',
  ];

  final _iconLocation = <String>[
    'assets/icons/length1.png',
    'assets/icons/area1.png',
    'assets/icons/volume1.png',
    'assets/icons/weight1.png',
    'assets/icons/data1.png',
    'assets/icons/currency1.png',
  ];

  final _headText = TextStyle(
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
  );

  @override
  void initState() {
    super.initState();
    for (var i = 0; i < _categoryNames.length; ++i) {
      var category = Category(
        iconLocation: _iconLocation[i],
        name: _categoryNames[i],
      );
      _categories.add(category);
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget _buildPortraitView() {
      return GridView.count(
        crossAxisCount: 2,
        childAspectRatio: 1,
        padding: EdgeInsets.all(15.0),
        children: _categories.map((Category c) {
          return CategoryTile(category: c);
        }).toList(),
      );
    }

    Widget _topBar() {
      return Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(height: 35),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                Icon(
                  Icons.brightness_medium,
                  size: 30,
                  color: Color(0xff333237),
                ),
                SizedBox(width: MediaQuery.of(context).size.width / 2),
                Image.asset(
                  'assets/icons/fourB.png',
                  height: 25,
                  width: 25,
                ),
              ],
            ),
            SizedBox(height: 35),
            Row(
              children: [
                SizedBox(width: 40),
                Container(
                  alignment: Alignment.centerLeft,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        "Unit",
                        style: _headText,
                      ),
                      Text(
                        "Converter",
                        style: _headText,
                      ),
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: 35),
            Container(
              width: 220,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(70),
                color: Color(0xffd6cef3),
              ),
              height: 40,
              child: Center(
                child: Text(
                  "Select a Category",
                  style: TextStyle(
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w700,
                    fontSize: 17,
                    color: Color(0xff7655c8),
                  ),
                ),
              ),
            ),
            SizedBox(height: 30),
          ],
        ),
      );
    }

    Widget listView() {
      return Column(
        children: <Widget>[
          _topBar(),
          Flexible(child: _buildPortraitView()),
        ],
      );
    }

    return Scaffold(
      backgroundColor: Color(0xfffbfbfb),
      resizeToAvoidBottomPadding: false,
      body: SafeArea(
        child: listView(),
      ),
    );
  }
}
