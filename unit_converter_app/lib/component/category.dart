import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/unit.dart';

/// A class containing [Category] name and iconLocation
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
