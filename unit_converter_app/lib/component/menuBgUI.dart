import 'dart:math';
import 'package:flutter/material.dart';

/// Background UI of the [MenuScreen]
class MenuBgUI extends StatefulWidget {
  @override
  _MenuBgUIState createState() => _MenuBgUIState();
}

class _MenuBgUIState extends State<MenuBgUI> {
  @override
  Widget build(BuildContext context) {
    final Size _size = Size(
      MediaQuery.of(context).size.width,
      MediaQuery.of(context).size.height / 1.57,
    );
    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        alignment: Alignment.topCenter,
        color: Theme.of(context).canvasColor,
        child: Stack(
          children: [
            Opacity(
              opacity: 0.2,
              child: WaveContainer(
                size: _size,
                color: Colors.grey[500],
                displacementFactor: 0.0,
                xOffset: 0,
                yOffset: -4,
              ),
            ),
            WaveContainer(
              size: _size,
              color: Theme.of(context).hintColor,
              xOffset: 0,
              yOffset: 0,
              displacementFactor: 0.0,
            ),
            Opacity(
              opacity: 0.8,
              child: WaveContainer(
                size: _size,
                color: Colors.grey[500],
                displacementFactor: 1.0,
                xOffset: 0,
                yOffset: 20,
              ),
            ),
            Opacity(
              opacity: 0.8,
              child: WaveContainer(
                size: _size,
                color: Theme.of(context).focusColor,
                xOffset: 0,
                yOffset: 20,
                displacementFactor: 1.0,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Paints the animated wave widget in the [MenuScreen]
class WaveContainer extends StatefulWidget {
  final Size size;
  final Color color;
  final int xOffset;
  final int yOffset;
  final double displacementFactor;

  WaveContainer(
      {Key key,
      @required this.size,
      this.xOffset,
      this.yOffset,
      this.color,
      this.displacementFactor})
      : assert(size != null),
        assert(color != null),
        assert(xOffset != null),
        assert(yOffset != null),
        assert(displacementFactor != null),
        super(key: key);
  @override
  _WaveContainerState createState() => _WaveContainerState();
}

class _WaveContainerState extends State<WaveContainer>
    with TickerProviderStateMixin {
  AnimationController animationController;
  List<Offset> _sinePoints = [];

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
        vsync: this, duration: Duration(milliseconds: 1400));
    animationController.addListener(() {
      _sinePoints.clear();
      for (var i = -2; i < widget.size.width.toInt(); ++i) {
        _sinePoints.add(
          Offset(
            i.toDouble() + widget.xOffset + 2,
            20 *
                    sin(((animationController.value * 360 - i) %
                            360 *
                            0.0174533) -
                        widget.displacementFactor) +
                widget.size.height -
                widget.yOffset -
                50,
          ),
        );
      }
    });
    animationController.repeat();
  }

  void dispose() {
    animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: AnimatedBuilder(
        animation: CurvedAnimation(
            parent: animationController, curve: Curves.easeInOut),
        builder: (context, child) => ClipPath(
          clipBehavior: Clip.antiAlias,
          clipper: SineClipper(
            sinePoints: _sinePoints,
            animation: animationController.value,
          ),
          child: Container(
            color: widget.color,
            width: widget.size.width,
            height: widget.size.height,
          ),
        ),
      ),
    );
  }
}

/// Custom clipper
class SineClipper extends CustomClipper<Path> {
  final double animation;
  final List<Offset> sinePoints;

  SineClipper({this.animation, this.sinePoints});

  @override
  Path getClip(Size size) {
    Path path = Path();
    path.lineTo(0.0, size.height);
    path.addPolygon(sinePoints, false);
    path.lineTo(size.width, 0.0);
    path.lineTo(0.0, 0.0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(SineClipper oldClipper) =>
      animation != oldClipper.animation;
}
