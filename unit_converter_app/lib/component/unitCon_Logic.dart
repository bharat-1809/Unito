import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/unit.dart';

class UnitConFgUI extends StatefulWidget {
  final List<Unit> units;
  UnitConFgUI({Key key, @required this.units})
      : assert(units != null),
        super(key: key);
  @override
  _UnitConFgUIState createState() => _UnitConFgUIState();
}

class _UnitConFgUIState extends State<UnitConFgUI> {
  double _inputValue;
  String _convertedValue = '';
  Unit _fromUnit;
  Unit _toUnit;
  List<DropdownMenuItem> _dropdownItems;
  bool _showValidationError = false;
  final _inputKey = GlobalKey(debugLabel: 'inputText');

  @override
  void initState() {
    super.initState();
    _setDefaults();
    _createDropdownItems();
  }

  @override
  void didUpdateWidget(UnitConFgUI old) {
    super.didUpdateWidget(old);
    if (widget.units != old.units) {
      _setDefaults();
      _createDropdownItems();
    }
    if (_inputValue != null) {
      _updateConversion();
    }
  }

  void _setDefaults() {
    setState(() {
      _fromUnit = widget.units[0];
      _toUnit = widget.units[1];
      if (_inputValue != null) {
        _updateConversion();
      }
    });
  }

  void _createDropdownItems() {
    var newItems = <DropdownMenuItem>[];
    for (var unit in widget.units) {
      newItems.add(DropdownMenuItem(
        value: unit.name,
        child: Container(
          child: Text(
            unit.name,
            softWrap: true,
          ),
        ),
      ));
    }
    setState(() {
      _dropdownItems = newItems;
    });
  }

  String _format(double value) {
    var _outputVal = value.toStringAsPrecision(8);
    if (_outputVal.contains('.') && _outputVal.endsWith('0')) {
      var i = _outputVal.length - 1;
      while (_outputVal[i] == '0') {
        i -= 1;
      }
      _outputVal = _outputVal.substring(0, i + 1);
    }
    if (_outputVal.endsWith('.')) {
      _outputVal = _outputVal.substring(0, _outputVal.length - 1);
    }
    return _outputVal;
  }

  Future<void> _updateConversion() async {
    setState(() {
      _convertedValue =
          _format(_inputValue * (_toUnit.conversion / _fromUnit.conversion));
    });
  }

  void _updateInputVal(String value) {
    setState(() {
      if (value == null || value.isEmpty) {
        _convertedValue = '';
      } else {
        try {
          final _inputDouble = double.parse(value);
          _showValidationError = false;
          _inputValue = _inputDouble;
          _updateConversion();
        } catch (e) {
          _showValidationError = true;
          print(e);
        }
      }
    });
  }

  Unit _getUnit(dynamic unitName) {
    return widget.units.firstWhere(
      (Unit unit) {
        return unit.name == unitName;
      },
      orElse: null,
    );
  }

  void _updateFromUnit(dynamic unitName) {
    setState(() {
      _fromUnit = _getUnit(unitName);
    });
    if (_inputValue != null) {
      _updateConversion();
    }
  }

  void _updateToUnit(dynamic unitName) {
    setState(() {
      _toUnit = _getUnit(unitName);
    });
    if (_inputValue != null) {
      _updateConversion();
    }
  }

  @override
  Widget build(BuildContext context) {
    final _fontSize =
        0.02445997458703939087 * MediaQuery.of(context).size.height;

    final _inputTextTheme = Theme.of(context).textTheme.headline.copyWith(
      fontSize: _fontSize,
      fontFamily: 'Roboto',
      fontWeight: FontWeight.w400,
      color: Theme.of(context).hoverColor,
      shadows: [],
    );
    final _borderRadius = BorderRadius.circular(10);
    final _materialElevation = 2.0;
    final _materialShadowColor = Theme.of(context).hintColor;
    final _materialColor = Theme.of(context).primaryColor;
    final _outlineBorder = OutlineInputBorder(
      borderRadius: _borderRadius,
      borderSide: BorderSide(
        color: Theme.of(context).focusColor,
        width: 1.3,
        style: BorderStyle.solid,
      ),
    );

    Widget _buildUnitsDropdown(
        String currentValue, ValueChanged<dynamic> onChanged) {
      return Container(
        padding: EdgeInsets.symmetric(vertical: 8.0),
        decoration: BoxDecoration(
          borderRadius: _borderRadius,
          border: Border.all(
            width: 1.4,
            color: Theme.of(context).focusColor,
          ),
          // color: Theme.of(context).hintColor,
        ),
        child: DropdownButtonHideUnderline(
          child: Container(
            decoration: BoxDecoration(
              borderRadius: _borderRadius,
            ),
            child: ButtonTheme(
              alignedDropdown: true,
              child: DropdownButton(
                value: currentValue,
                items: _dropdownItems,
                onChanged: onChanged,
                style: _inputTextTheme.copyWith(
                  fontSize: _fontSize,
                  fontWeight: FontWeight.w400,
                  fontFamily: 'Roboto_Con',
                  shadows: [],
                ),
              ),
            ),
          ),
        ),
      );
    }

    Widget _buildInputContainer() {
      return Container(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Expanded(
                flex: 4,
                child: Material(
                  elevation: _materialElevation,
                  color: _materialColor,
                  shadowColor: _materialShadowColor,
                  borderRadius: _borderRadius,
                  child: Container(
                    child: TextField(
                      key: _inputKey,
                      decoration: InputDecoration(
                        labelText: 'Input',
                        labelStyle: _inputTextTheme,
                        focusedBorder: _outlineBorder,
                        enabledBorder: _outlineBorder,
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 20, vertical: 30),
                      ),
                      cursorColor: Theme.of(context).focusColor,
                      style: _inputTextTheme.copyWith(fontSize: _fontSize),
                      keyboardType: TextInputType.number,
                      onChanged: (newValue) {
                        _updateInputVal(newValue);
                      },
                    ),
                  ),
                ),
              ),
              Expanded(flex: 2, child: SizedBox(height: 16.0)),
              Expanded(
                flex: 4,
                child: Material(
                    elevation: _materialElevation,
                    shadowColor: _materialShadowColor,
                    color: _materialColor,
                    borderRadius: _borderRadius,
                    child:
                        _buildUnitsDropdown(_fromUnit.name, _updateFromUnit)),
              ),
            ],
          ),
        ),
      );
    }

    Widget _buildArrows() {
      return Container(
        child: RotatedBox(
          quarterTurns: 1,
          child: Icon(Icons.compare_arrows,
              size: 45, color: Theme.of(context).splashColor),
        ),
      );
    }

    Widget _buildOutputContainer() {
      return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 20.0),
        child: Container(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                flex: 4,
                child: Material(
                  elevation: _materialElevation,
                  color: _materialColor,
                  shadowColor: _materialShadowColor,
                  borderRadius: _borderRadius,
                  child: InputDecorator(
                    textAlign: TextAlign.end,
                    isFocused: false,
                    child: Text(
                      _convertedValue,
                      style: _inputTextTheme,
                    ),
                    decoration: InputDecoration(
                      labelText: 'Output',
                      labelStyle: _inputTextTheme,
                      enabledBorder: _outlineBorder,
                      contentPadding:
                          EdgeInsets.symmetric(horizontal: 20.0, vertical: 30),
                    ),
                  ),
                ),
              ),
              Expanded(flex: 2, child: SizedBox(height: 15)),
              Expanded(
                flex: 4,
                child: Material(
                    elevation: _materialElevation,
                    color: _materialColor,
                    shadowColor: _materialShadowColor,
                    borderRadius: _borderRadius,
                    child: _buildUnitsDropdown(_toUnit.name, _updateToUnit)),
              ),
            ],
          ),
        ),
      );
    }

    return Column(
      // mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Expanded(flex: 3, child: _buildInputContainer()),
        Expanded(flex: 1, child: _buildArrows()),
        Expanded(flex: 3, child: _buildOutputContainer()),
      ],
    );
  }
}
