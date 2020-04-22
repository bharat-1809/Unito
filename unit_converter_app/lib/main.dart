import 'package:flutter/material.dart';
import 'package:unit_converter_app/components/category_tile.dart';

void main() {
  return runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Unit Converter"),
          centerTitle: true,
        ),
        body: Center(
          child: CategoryTile(
            iconLocation: Icons.access_alarm,
            name: 'Length',
          ),
        ),
      ),
    );
  }
}
