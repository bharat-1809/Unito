import 'package:flutter/material.dart';

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
          child: Text("BHARAT"),
        ),
      ),
    );
  }
}
