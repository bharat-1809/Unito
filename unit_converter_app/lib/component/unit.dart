import 'package:flutter/material.dart';

class Unit {
  String name;
  double conversion;

  Unit({
    @required this.name,
    @required this.conversion,
  });

  Unit.fromJson(Map json)
      : assert(json['name'] != null),
        assert(json['conversion'] != null),
        name = json['name'],
        conversion = json['conversion'].toDouble();
}
