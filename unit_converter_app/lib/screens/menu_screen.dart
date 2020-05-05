import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:unitconverterapp/component/menuBgUI.dart';

class MenuScreen extends StatefulWidget {
  @override
  _MenuScreenState createState() => _MenuScreenState();
}

class _MenuScreenState extends State<MenuScreen> {
  final bool _showNetworkError = false;
  final _borderRadius = BorderRadius.circular(70);

  @override
  Widget build(BuildContext context) {
    final _height = MediaQuery.of(context).size.height;
    final _width = MediaQuery.of(context).size.width;
    final _infoTextStyle = Theme.of(context).textTheme.title.copyWith(
          fontSize: 0.0190 * _height,
          fontWeight: FontWeight.w500,
          fontFamily: 'SourceSans',
        );

    Widget _buildMenuContent() {
      return Container(
        height: _height,
        width: _width,
        color: Colors.transparent,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: _height / 60,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                SizedBox(width: _height / 50),
                IconButton(
                  highlightColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  icon: Icon(
                    Icons.arrow_back,
                    size: 0.03335451080050826027 * _height,
                    color: Colors.white,
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
            SizedBox(height: _width / 120),
            Container(
              width: _width / 1.2,
              child: Wrap(
                alignment: WrapAlignment.center,
                children: [
                  RichText(
                      textAlign: TextAlign.center,
                      text: TextSpan(
                        text: 'Unito ',
                        style: _infoTextStyle.copyWith(
                          fontWeight: FontWeight.w800,
                          fontSize: 0.0210 * _height,
                        ),
                        children: [
                          TextSpan(
                            text:
                                ' is a casual utility app, that shows the implementation of modern minimalistic UI in ',
                            style: _infoTextStyle,
                          ),
                          TextSpan(
                            text: 'Flutter',
                            style: _infoTextStyle.copyWith(
                                fontSize: 0.0210 * _height,
                                fontWeight: FontWeight.w800),
                          ),
                        ],
                      )),
                ],
              ),
            ),
            SizedBox(height: _height / 40),
            Text(
              'DEVELOPER',
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.0178 * _height,
                    fontWeight: FontWeight.w600,
                  ),
            ),
            SizedBox(height: _height / 30),
            Material(
              elevation: 10,
              borderRadius: BorderRadius.circular(100),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(100),
                  border: Border.all(
                    width: 4.0,
                    color: Theme.of(context).canvasColor,
                  ),
                ),
                child: CircleAvatar(
                  backgroundImage: NetworkImage(
                      'https://avatars0.githubusercontent.com/u/58745044?s=400&u=83b2992abc9f6bb61e0a9f571e9e0e178d622950&v=4'),
                  radius: (_height / _width) * 28,
                ),
              ),
            ),
            SizedBox(height: _height / 40),
            Text(
              'Bharat Sharma',
              softWrap: true,
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.040 * _height,
                    fontFamily: 'Pacifico',
                  ),
            ),
            Text(
              'Flutter Developer',
              style: Theme.of(context).textTheme.title.copyWith(
                    fontSize: 0.020 * _height,
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w300,
                    letterSpacing: 1.8,
                  ),
              softWrap: true,
            ),
          ],
        ),
      );
    }

    Widget _buildFlareMinion() {
      return Container(
        height: _height / 3.2,
        width: _height / 3.2,
        child: FlareActor(
          'assets/flare/minion.flr',
          alignment: Alignment.center,
          fit: BoxFit.contain,
          animation: 'Wave',
        ),
      );
    }

    Widget _buildSocialButton({
      @required String name,
      @required String iconLocation,
      @required VoidCallback onClick,
    }) {
      return Container(
        width: _width / 3.5,
        child: RaisedButton(
          splashColor: Theme.of(context).splashColor,
          highlightColor: Theme.of(context).highlightColor,
          onPressed: onClick,
          elevation: 2.5,
          padding: EdgeInsets.symmetric(vertical: 8.0, horizontal: 15.0),
          shape: RoundedRectangleBorder(
            borderRadius: _borderRadius,
          ),
          color: Colors.white,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Container(
                width: 25,
                height: 25,
                child: Image.asset(iconLocation, fit: BoxFit.contain),
              ),
              SizedBox(width: 7.5),
              Text(
                name,
                style: Theme.of(context).textTheme.headline.copyWith(
                      fontSize: 15,
                      color: Colors.black,
                      fontWeight: FontWeight.w500,
                      fontFamily: 'SourceSans',
                    ),
              ),
            ],
          ),
        ),
      );
    }

    return Scaffold(
      body: Container(
        color: Theme.of(context).focusColor,
        child: SafeArea(
          child: Container(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Expanded(
                  child: Stack(
                    children: <Widget>[
                      MenuBgUI(),
                      _buildMenuContent(),
                      Positioned(
                        left: _width / 2.17,
                        top: _height / 1.36,
                        child: _buildFlareMinion(),
                      ),
                      Positioned(
                        top: _height / 1.5,
                        width: _width,
                        child: Container(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            mainAxisSize: MainAxisSize.min,
                            children: <Widget>[
                              Text(
                                'Connect With Me On',
                                style: Theme.of(context)
                                    .textTheme
                                    .headline
                                    .copyWith(
                                      fontSize: _height * 0.025,
                                    ),
                              ),
                              SizedBox(height: 20),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  _buildSocialButton(
                                    name: 'GitHub',
                                    iconLocation: 'assets/icons/github.png',
                                    onClick: () {},
                                  ),
                                  SizedBox(width: 7),
                                  _buildSocialButton(
                                    name: 'Linkedin',
                                    iconLocation: 'assets/icons/linkedin.png',
                                    onClick: () {},
                                  ),
                                  SizedBox(width: 7),
                                  _buildSocialButton(
                                    name: 'Twitter',
                                    iconLocation: 'assets/icons/twitter.png',
                                    onClick: () {},
                                  ),
                                ],
                              ),
                              SizedBox(height: 7.0),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  _buildSocialButton(
                                    name: 'Email',
                                    iconLocation: 'assets/icons/gmail.png',
                                    onClick: () {},
                                  )
                                ],
                              ),
                              SizedBox(height: _height / 20),
                              Row(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: <Widget>[
                                  SizedBox(width: _width / 10),
                                  Padding(
                                    padding: const EdgeInsets.symmetric(
                                      horizontal: 10.0,
                                      vertical: 8.0,
                                    ),
                                    child: Container(
                                      width: _width / 2,
                                      child: RichText(
                                        text: TextSpan(
                                          text:
                                              '</>  To see the source code please visit the ',
                                          style: Theme.of(context)
                                              .textTheme
                                              .headline
                                              .copyWith(
                                                fontSize: _height * 0.015,
                                                fontWeight: FontWeight.w400,
                                              ),
                                          children: [
                                            TextSpan(
                                              text: 'GitHub Repo',
                                              style: Theme.of(context)
                                                  .textTheme
                                                  .headline
                                                  .copyWith(
                                                    fontSize: _height * 0.015,
                                                    fontWeight: FontWeight.w600,
                                                  ),
                                              recognizer:
                                                  TapGestureRecognizer(),
                                              children: [
                                                TextSpan(
                                                  text: '  </>',
                                                  style: Theme.of(context)
                                                      .textTheme
                                                      .headline
                                                      .copyWith(
                                                        fontSize:
                                                            _height * 0.015,
                                                        fontWeight:
                                                            FontWeight.w400,
                                                      ),
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
