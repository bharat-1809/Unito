import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:page_transition/page_transition.dart';
import 'package:unito/component/appAds.dart';
import 'package:unito/component/category.dart';
import 'package:unito/component/category_tile.dart';
import 'package:unito/component/unit.dart';
import 'package:unito/screens/menu_screen.dart';
import 'package:unito/theme/themeChanger.dart';
import 'package:provider/provider.dart';
import 'package:unito/theme/themes.dart';
import 'package:firebase_admob/firebase_admob.dart';

/// Builds the main screen.
/// Containing the title, buttons and GridView
class CategoryScreen extends StatefulWidget {
  const CategoryScreen();
  @override
  _CategoryScreenState createState() => _CategoryScreenState();
}

class _CategoryScreenState extends State<CategoryScreen> {
  /// Creates a list of [Category] widgets for storing each category information
  final _categories = <Category>[];

  /// List of Category names
  static const _categoryNames = <String>[
    'Length',
    'Area',
    'Volume',
    'Weight',
    'Data',
    'Time',
  ];

  /// List of Category icon location
  ///
  /// Light
  final _iconLocationLight = <String>[
    'assets/icons/length1.png',
    'assets/icons/area1.png',
    'assets/icons/volume1.png',
    'assets/icons/weight1.png',
    'assets/icons/data1.png',
    'assets/icons/time1.png',
  ];

  /// Dark
  final _iconLocationDark = <String>[
    'assets/icons/length2.png',
    'assets/icons/area2.png',
    'assets/icons/volume2.png',
    'assets/icons/weight2.png',
    'assets/icons/data2.png',
    'assets/icons/time2.png',
  ];

  BannerAd _bannerAd;
  InterstitialAd _interstitialAd;

  bool _isInterstitialAdReady;

  void _loadInterstitialAd() {
    print("Loading Interstitial Ad");
    _interstitialAd.load();
  }

  void _reloadInterstitialAd() async {
    await _interstitialAd.dispose();

    _isInterstitialAdReady = false;

    _interstitialAd = InterstitialAd(
      adUnitId: AddManager.interstitialAdUnitId,
      listener: _onInterstitialAdEvent,
    );

    _interstitialAd.load();
  }

  void _moveToHome() {}

  void _onInterstitialAdEvent(MobileAdEvent event) {
    switch (event) {
      case MobileAdEvent.loaded:
        print("---------------------------> Interstitial Ad Loaded");
        _isInterstitialAdReady = true;
        break;
      case MobileAdEvent.failedToLoad:
        _isInterstitialAdReady = false;
        print("---------------------------> Failed to load an interstitial ad");
        break;
      case MobileAdEvent.closed:
        _moveToHome();
        break;
      default:
      // NOTHING
    }
  }

  void _loadBannerAd() {
    _bannerAd
      ..load()
      ..show(anchorType: AnchorType.bottom);
  }

  @override
  void initState() {
    _isInterstitialAdReady = false;

    _bannerAd = BannerAd(
      adUnitId: AddManager.bannerAdUnitId,
      size: AdSize.banner,
    );

    _interstitialAd = InterstitialAd(
      adUnitId: AddManager.interstitialAdUnitId,
      listener: _onInterstitialAdEvent,
    );

    _loadBannerAd();
    _loadInterstitialAd();

    super.initState();
  }

  @override
  void dispose() {
    _bannerAd?.dispose();
    _interstitialAd?.dispose();

    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if (_categories.isEmpty) {
      await _retrieveLocalCategories();
    }
  }

  /// This method parses JSON file and add to the categories list
  Future<void> _retrieveLocalCategories() async {
    final json = DefaultAssetBundle.of(context).loadString('assets/data/units.json');
    final data = JsonDecoder().convert(await json);
    if (data is! Map) {
      throw ('Json is not a Map');
    }
    var categoryIndex = 0;
    data.keys.forEach((key) {
      final List<Unit> units = data[key].map<Unit>((dynamic data) => Unit.fromJson(data)).toList();

      var category = Category(
          iconLocation: _iconLocationLight[categoryIndex],
          name: _categoryNames[categoryIndex],
          units: units);

      setState(() {
        _categories.add(category);
      });

      categoryIndex += 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    final theme = Provider.of<ThemeChanger>(context);
    AppTheme appTheme = AppTheme();
    bool isDarkTheme = Theme.of(context).brightness == Brightness.dark;

    ///Below two methods update the components as per theme
    ///
    /// Updates the iconLocation according to theme
    void updateCategoryIcons() {
      setState(() {
        for (var i = 0; i < _categories.length; ++i) {
          _categories[i].iconLocation = isDarkTheme ? _iconLocationDark[i] : _iconLocationLight[i];
        }
      });
    }

    /// Returns the Menu Icon based on the theme
    Widget getIcon() {
      if (!isDarkTheme) {
        return Image.asset(
          'assets/icons/menuB.png',
          height: 0.02779542566709021689 * height,
          width: 0.02779542566709021689 * height,
        );
      } else {
        return Image.asset(
          'assets/icons/menuW.png',
          height: 0.02779542566709021689 * height,
          width: 0.02779542566709021689 * height,
        );
      }
    }

    ///
    /// Builds Category grid according theme
    ///
    Widget _buildCategoryGrid() {
      updateCategoryIcons();
      return GridView.count(
        crossAxisCount: 2,
        childAspectRatio: 1,
        padding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 1.0),
        children: _categories.map((Category c) {
          return CategoryTile(category: c);
        }).toList(),
      );
    }

    ///
    /// Builds the top bar with title and buttons
    ///
    Widget _topBar() {
      return Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          /// Spacer
          SizedBox(height: 0.02401359593392630365 * height),

          /// Top Icon Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              /// Spacer
              SizedBox(width: width / 90),

              /// Theme toggle icon
              IconButton(
                onPressed: () async {
                  if (_isInterstitialAdReady) {
                    _interstitialAd.show();
                  }

                  print("Theme change toogled");
                  theme.themeData =
                      isDarkTheme ? appTheme.getLightTheme() : appTheme.getDarkTheme();

                  _moveToHome();
                  _reloadInterstitialAd();
                },
                padding: EdgeInsets.all(0.0),
                highlightColor: Colors.transparent,
                splashColor: Colors.transparent,
                icon: Icon(
                  Icons.brightness_medium,
                  size: 0.03335451080050826027 * height,
                  color: Theme.of(context).iconTheme.color,
                ),
              ),
              SizedBox(width: width / 2),

              /// Menu Icon
              FlatButton(
                padding: EdgeInsets.all(0.0),
                splashColor: Colors.transparent,
                highlightColor: Colors.transparent,
                onPressed: () {
                  print('Height: $height || Width: $width');
                  Navigator.of(context).push(PageTransition(
                    child: MenuScreen(),
                    type: PageTransitionType.rightToLeftWithFade,
                  ));
                },
                child: getIcon(),
              ),
            ],
          ),

          /// Spacer
          SizedBox(height: 0.01901359593392630365 * height),

          /// Heading Container
          Row(
            children: [
              SizedBox(width: 0.09722222222222221952 * width),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    "Unit",
                    style: Theme.of(context)
                        .textTheme
                        .headline5
                        .copyWith(fontSize: 0.05559085133418043379 * height),
                  ),
                  Text(
                    "Converter",
                    style: Theme.of(context)
                        .textTheme
                        .headline5
                        .copyWith(fontSize: 0.05559085133418043379 * height),
                  ),
                ],
              ),
            ],
          ),

          /// Spacer
          SizedBox(height: 0.03901359593392630365 * height),

          /// Container for sub-heading
          Container(
            width: 0.43472222222222220737 * width,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(70),
              color: Theme.of(context).accentColor,
            ),
            height: 0.04447268106734434703 * height,
            child: Center(
              child: Text(
                "Select a Category",
                style: Theme.of(context)
                    .textTheme
                    .subtitle1
                    .copyWith(fontSize: 0.01890088945362134749 * height),
              ),
            ),
          ),

          /// Spacer
          SizedBox(height: 0.02035451080050826027 * height),
        ],
      );
    }

    ///
    /// Builds the final screen
    ///
    Widget listView() {
      return Column(
        children: <Widget>[
          Expanded(flex: 3, child: _topBar()),
          Expanded(flex: 5, child: _buildCategoryGrid()),
        ],
      );
    }

    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      resizeToAvoidBottomPadding: false,
      body: SafeArea(
        child: listView(),
      ),
    );
  }
}
