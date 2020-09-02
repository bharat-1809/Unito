import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/material.dart';

/// Error Dialog Box
// ignore: must_be_immutable
class ErrorUI extends StatefulWidget {
  final String errorText;
  final VoidCallback onPressed;
  double fontSize = 16;
  double spacerWidth = 100;
  ErrorUI({
    Key key,
    @required this.errorText,
    @required this.onPressed,
    this.fontSize,
    this.spacerWidth,
  })  : assert(errorText != null),
        assert(onPressed != null),
        super(key: key);
  @override
  _ErrorUIState createState() => _ErrorUIState();
}

class _ErrorUIState extends State<ErrorUI> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: AlertDialog(
        actions: [
          IconButton(
            icon: Icon(
              Icons.refresh,
              size: 27,
            ),
            onPressed: widget.onPressed,
          ),
          SizedBox(width: widget.spacerWidth),
        ],
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        backgroundColor: Theme.of(context).canvasColor,
        elevation: 10,
        scrollable: true,
        content: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              height: 100,
              width: 100,
              child: FlareActor(
                'assets/flare/error.flr',
                animation: 'default',
                alignment: Alignment.center,
                fit: BoxFit.contain,
              ),
            ),
            SizedBox(height: 10),
            Text(
              widget.errorText,
              style: Theme.of(context)
                  .textTheme
                  .bodyText1
                  .copyWith(fontSize: widget.fontSize),
            ),
          ],
        ),
      ),
    );
  }
}
