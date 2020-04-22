import 'package:flutter/material.dart';

class Category {
  final String iconLocation;
  final String name;

  const Category({
    @required this.iconLocation,
    @required this.name,
  })  : assert(iconLocation != null),
        assert(name != null);
}
