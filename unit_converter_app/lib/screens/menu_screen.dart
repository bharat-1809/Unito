import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/menuBgUI.dart';

class MenuScreen extends StatefulWidget {
  @override
  _MenuScreenState createState() => _MenuScreenState();
}

class _MenuScreenState extends State<MenuScreen> {
  @override
  Widget build(BuildContext context) {
    final _height = MediaQuery.of(context).size.height;
    final _width = MediaQuery.of(context).size.width;
    Widget _buildMenuContent() {
      return Container(
        height: _height,
        width: _width,
        color: Colors.transparent,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: _height / 60,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                SizedBox(width: _height / 50),
                IconButton(
                  highlightColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  icon: Icon(
                    Icons.arrow_back,
                    size: 0.03335451080050826027 * _height,
                    color: Colors.white,
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
            SizedBox(height: _height / 70),
            Text(
              'DEVELOPER',
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.022 * _height,
                    fontWeight: FontWeight.w600,
                  ),
            ),
            SizedBox(height: _height / 28),
            CircleAvatar(
              backgroundImage: AssetImage('assets/images/bs.jpg'),
              radius: (_height / _width) * 32.5,
            ),
            SizedBox(height: _height / 40),
            Text(
              'Bharat Sharma',
              softWrap: true,
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.048 * _height,
                    fontFamily: 'Pacifico',
                  ),
            ),
            Text(
              'Flutter Developer',
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.030 * _height,
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w300,
                    letterSpacing: 1.8,
                  ),
              softWrap: true,
            ),
          ],
        ),
      );
    }

    return Scaffold(
      body: Container(
        color: Theme.of(context).focusColor,
        child: SafeArea(
          child: Container(
            child: Column(
              children: [
                Expanded(
                  child: Stack(
                    children: <Widget>[
                      MenuBgUI(),
                      _buildMenuContent(),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
