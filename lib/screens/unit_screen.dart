import 'package:flutter/material.dart';
import 'package:unito/component/category.dart';
import 'package:unito/component/unitCon_Logic.dart';
import 'package:unito/component/unit_UI.dart';
import 'package:unito/screens/menu_screen.dart';

/// Unit Converter Page.
/// Builds the Unit Converter Page
class UnitConverter extends StatefulWidget {
  final Category category;
  const UnitConverter({
    Key key,
    @required this.category,
  })  : assert(category != null),
        super(key: key);
  @override
  _UnitConverterState createState() => _UnitConverterState();
}

class _UnitConverterState extends State<UnitConverter> {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;

    /// Input Container
    /// Contains the Dropdowns and Input container
    Widget unitInputContainer() {
      return Container(
        padding: EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: Color.fromRGBO(46, 46, 46, 0.05),
              offset: Offset(0.0, 0.0),
              spreadRadius: 5,
              blurRadius: 10,
            ),
          ],
        ),
        height: 0.612745098 * height,
        width: 0.7895884774 * width,
        child: UnitConFgUI(
          units: widget.category.units,
        ),
      );
    }

    /// UI Design (Top of the stack)
    /// Contains the title, buttons and image
    Widget _topDesign() {
      return Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          /// Spacer
          Column(
            children: <Widget>[
              SizedBox(height: 0.02491359593392630365 * height),
            ],
          ),

          /// Top Icon Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              SizedBox(width: height / 50),

              /// Back Icon
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

              /// Menu Icon
              FlatButton(
                highlightColor: Colors.transparent,
                splashColor: Colors.transparent,
                padding: EdgeInsets.all(0),
                onPressed: () {
                  print('Heigth: $height || Width: $width');
                  Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) => MenuScreen(),
                  ));
                },
                child: Image.asset(
                  'assets/icons/menuW.png',
                  height: 0.02779542566709021689 * height,
                  width: 0.02779542566709021689 * height,
                ),
              ),
              SizedBox(width: 0.0),
            ],
          ),

          /// Spacer
          SizedBox(height: 0.04570902160101652054 * height),

          /// Title and Image Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              /// Spacer
              SizedBox(width: 0.0),
              Text(
                widget.category.name,
                style: Theme.of(context)
                    .textTheme
                    .headline6
                    .copyWith(fontSize: 0.05826175349428208584 * height),
              ),
              SizedBox(width: 0.03281249999999999909 * width),
              Image.asset(
                'assets/icons/${widget.category.name.toLowerCase()}2.png',
                height: 0.11098170266836086757 * height,
                width: 0.11098170266836086757 * height,
              ),
              SizedBox(width: 0.0),
            ],
          ),

          /// Spacer
          SizedBox(height: width / 7),

          /// Unit Converter Input Container
          unitInputContainer(),
        ],
      );
    }

    /// Final Return
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Theme.of(context).focusColor.withAlpha(255),
              Theme.of(context).hintColor.withAlpha(255),
              Theme.of(context).focusColor.withAlpha(255),
              Theme.of(context).hintColor.withAlpha(255),
            ],
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
          ),
        ),
        child: SafeArea(
          bottom: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Expanded(
                child: Stack(
                  children: <Widget>[
                    UnitBgUI(),
                    _topDesign(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
