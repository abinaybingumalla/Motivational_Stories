// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('motivation', ['ionic', 'ngCordova', 'motivation.controllers', 'motivation.services', 'ionic.contrib.ui.tinderCards2'])

.config(function ($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(true);
})

.run(function ($ionicPlatform, $rootScope, $cordovaLocalNotification, $ionicLoading, $timeout) {
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

    $urlRouterProvider.otherwise('/app/list');
})



;
