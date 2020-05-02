import 'package:flutter/material.dart';

/// A class containing [Category] name and iconLocation
class Category {
  String iconLocation;
  final String name;

  Category({
    @required this.iconLocation,
    @required this.name,
  })  : assert(iconLocation != null),
        assert(name != null);
}
