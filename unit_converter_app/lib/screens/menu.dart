import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/menuBgUI.dart';

class MenuScreen extends StatefulWidget {
  @override
  _MenuScreenState createState() => _MenuScreenState();
}

class _MenuScreenState extends State<MenuScreen> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Theme.of(context).focusColor,
      child: SafeArea(
        child: Container(
          child: Column(
            children: [
              Expanded(
                child: Stack(
                  children: <Widget>[
                    MenuBgUI(),
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
