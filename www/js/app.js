// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('motivation', ['ionic', 'ngCordova', 'motivation.controllers', 'motivation.services', 'ionic.contrib.ui.tinderCards2'])

.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(true);
})

.run(function ($ionicPlatform, $rootScope, $cordovaLocalNotification, $ionicLoading, $timeout, $localStorage) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        $rootScope.fields = {};
        var dat = $localStorage.getObject('notifychecked', 'true');

        $rootScope.fields.notifychecked = JSON.parse(dat);

        if ($rootScope.fields.notifychecked) {
            var now = new Date().getTime();
            _5_sec_from_now = new Date(now + 1.5 * 60 * 60 * 1000);
            $cordovaLocalNotification.schedule({
                title: "Your Daily Dose is Ready",
                text: "Let's Begin ...",
                at: _5_sec_from_now,
                every: "day",
                icon: "platforms/android/res/drawable-mdpi/icon.png",
            }).then(function () {
                    //console.log('Added Favorite ');

                },
                function () {
                    //console.log('Failed to add Notification ');
                });
        }

        $rootScope.$on("$cordovaLocalNotification:click", function (notification) {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner> Good things take time...! Please wait.. :)'
            });
            $timeout(function () {
                $ionicLoading.hide();
            }, 1500);
            var randomNum = Math.floor((Math.random() * (81 - 1)) + 1);
            window.location.href = 'file:///android_asset/www/index.html#app/list/' + randomNum;
        });



    });

    setTimeout(function () {
        $ionicPlatform.ready(function () {
            var isAppForeground = true;

            function initAds() {
                if (admob) {
                    var adPublisherIds = {

                        android: {
                            banner: "pub-8906170658779735",
                            interstitial: "ca-app-pub-8906170658779735/1396227801"
                        }
                    };

                    var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

                    admob.setOptions({
                        publisherId: admobid.banner,
                        interstitialAdId: admobid.interstitial


                    });

                    registerAdEvents();

                } else {
                    alert('AdMobAds plugin not ready');
                }
            }

            function onAdLoaded(e) {
                if (isAppForeground) {
                    if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
                        console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
                    } else if (e.adType === admob.AD_TYPE_BANNER) {
                        console.log("New banner received");
                    }
                }
            }

            function onPause() {
                if (isAppForeground) {
                    admob.destroyBannerView();
                    isAppForeground = false;
                }
            }

            function onResume() {

                if (!isAppForeground) {

                    setTimeout(admob.requestInterstitialAd, 1000 * 60 * 5);
                    isAppForeground = true;
                }
            }

            // optional, in case respond to events
            function registerAdEvents() {
                document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
                document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
                document.addEventListener(admob.events.onAdOpened, function (e) {});
                document.addEventListener(admob.events.onAdClosed, function (e) {});
                document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
                document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});

                document.addEventListener("pause", onPause, false);
                document.addEventListener("resume", onResume, false);
            }

            function onDeviceReady() {
                document.removeEventListener('deviceready', onDeviceReady, false);


                initAds();



                // display a banner at startup
                // admob.createBannerView();

                // request an interstitial
                admob.requestInterstitialAd();
            }

            document.addEventListener("deviceready", onDeviceReady, false);

        });
    }, 1000 * 60 * 3);
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'MenuCtrl'
        })
        .state('app.list', {
            url: '/list',
            views: {
                'menuContent': {
                    templateUrl: 'templates/list.html',
                    controller: 'ListController'
                }
            }
        })
        .state('app.detail', {
            url: '/list/:aId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/detail.html',
                    controller: 'StoryDetailController'
                }
            }
        })

    .state('app.quotes', {
            url: '/quotes',
            views: {
                'menuContent': {
                    templateUrl: 'templates/quotes.html',
                    controller: 'QuotesController'
                }
            }
        })
        .state('app.quotations', {
            url: '/quotes/:aId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/quotations.html',
                    controller: 'QuotesDetailController'
                }
            }
        })

    .state('app.favorites', {
        url: '/favorites',
        views: {
            'menuContent': {
                templateUrl: 'templates/favorites.html',
                controller: 'FavoritesController'

            }
        }
    })

    .state('app.storyoftheDay', {
        url: '/storyoftheDay',
        views: {
            'menuContent': {
                templateUrl: 'templates/storyoftheDay.html'

            }
        }
    })

    .state('app.intresting', {
        url: '/intresting',
        views: {
            'menuContent': {
                templateUrl: 'templates/intresting.html',
                controller: 'InterestingController'
            }
        }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',

            }
        }
    })

    $urlRouterProvider.otherwise('/app/list');
})



;
