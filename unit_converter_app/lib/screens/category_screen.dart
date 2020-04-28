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
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    Widget _buildPortraitView() {
      return GridView.count(
        crossAxisCount: 2,
        childAspectRatio: 1,
        padding: EdgeInsets.all(20.0),
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
            SizedBox(height: 0.03891359593392630365 * height),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                SizedBox(width: width / 50),
                Icon(
                  Icons.brightness_medium,
                  size: 0.03335451080050826027 * height,
                  color: Color(0xff333237),
                ),
                SizedBox(width: width / 2),
                FlatButton(
                  padding: EdgeInsets.all(0.0),
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onPressed: () {
                    print('Height: $height || Width: $width');
                  },
                  child: Image.asset(
                    'assets/icons/fourB.png',
                    height: 0.02779542566709021689 * height,
                    width: 0.02779542566709021689 * height,
                  ),
                ),
              ],
            ),
            SizedBox(height: 0.03891359593392630365 * height),
            Row(
              children: [
                SizedBox(width: 0.09722222222222221952 * width),
                Container(
                  alignment: Alignment.centerLeft,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        "Unit",
                        style: Theme.of(context).textTheme.headline.copyWith(fontSize: 0.05559085133418043379 * height),
                      ),
                      Text(
                        "Converter",
                        style: Theme.of(context).textTheme.headline.copyWith(fontSize: 0.05559085133418043379 * height),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            SizedBox(height: 0.03891359593392630365 * height),
            Container(
              width: 0.53472222222222220737 * width,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(70),
                color: Color(0xffd6cef3),
              ),
              height: 0.04447268106734434703 * height,
              child: Center(
                child: Text(
                  "Select a Category",
                  style: Theme.of(context).textTheme.subhead.copyWith(fontSize:0.01890088945362134749 * height),
                ),
              ),
            ),
            SizedBox(height: 0.03335451080050826027 * height),
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
