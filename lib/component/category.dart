import 'package:flutter/material.dart';
import 'package:unito/component/unit.dart';

/// A class containing [Category] name, iconLocation, and List if corresponding units 
class Category {
  String iconLocation;
  final String name;
  final List<Unit> units;

  Category({
    @required this.iconLocation,
    @required this.name,
    @required this.units,
  })  : assert(iconLocation != null),
        assert(name != null),
        assert(units != null);
}
