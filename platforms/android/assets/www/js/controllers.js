angular.module('motivation.controllers', [])

.controller('ListController', ['$scope', '$stateParams', 'storiesFactory', 'favoriteFactory', '$ionicListDelegate', '$cordovaToast', '$ionicPlatform', '$ionicPopover', function ($scope, $stateParams, storiesFactory, favoriteFactory, $ionicListDelegate, $cordovaToast, $ionicPlatform) {

    $scope.stories = storiesFactory.getStories();
    $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));



    $scope.addFavorite = function (index) {
        console.log("index is " + index);
        favoriteFactory.addToFavorites(index);
        $ionicListDelegate.closeOptionButtons();

        $ionicPlatform.ready(function () {

            $cordovaToast
                .show('Added Favorite ' + $scope.stories[index].title, 'long', 'center')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        });

    }

}])

.controller('StoryDetailController', ['$scope', '$stateParams', 'storiesFactory', '$ionicPopover', 'favoriteFactory', '$cordovaToast', '$ionicPlatform', '$cordovaSocialSharing', '$ionicPopup', '$ionicScrollDelegate', function ($scope, $stateParams, storiesFactory, $ionicPopover, favoriteFactory, $cordovaToast, $ionicPlatform, $cordovaSocialSharing, $ionicPopup, $ionicScrollDelegate) {

    $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));

    $ionicPopover.fromTemplateUrl('templates/story-detail-popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
        $scope.popover.show($event);

    };

    /*$ionicPlatform.ready(function () {
        var now = new Date().getTime();
        _5_sec_from_now = new Date(now + 5 * 1000);
        $cordovaLocalNotification.schedule({
            title: "Your Daily Dose is Ready",
            text: "Let's Begin ...",
            at: _5_sec_from_now,
            every: "minute",
            icon: "platforms/android/res/drawable-mdpi/icon.png",
        }).then(function () {
                //console.log('Added Favorite ');

            },
            function () {
                //console.log('Failed to add Notification ');
            });
        cordova.plugins.notification.local.on("click", function (notification) {
            $scope.getRandomStory();
            var randomNum = $scope.story.id;
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner> Good things take time...! Please wait.. :)'
            });
            $timeout(function () {
                $ionicLoading.hide();
            }, 1500);
            window.location.href = 'file:///android_asset/www/index.html#app/list/' + randomNum;

        }, this);

    });*/



    $scope.addFavorite = function () {
        console.log("index is " + $scope.story.id);
        favoriteFactory.addToFavorites($scope.story.id);
        $scope.popover.hide();

        $ionicPlatform.ready(function () {
            $cordovaToast
                .show('Added Favorite ' + $scope.story.title, 'long', 'bottom')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        });

    };

    $scope.startSpeak = function () {
        $scope.popover.hide();
        var storytoSpeak = "";

        for (var i = 0; i < $scope.story.description.length; i++) {

            storytoSpeak += $scope.story.description[i].paragraph + " ";
        }

        $ionicPlatform.ready(function () {
            TTS
                .speak({
                    text: storytoSpeak,
                    locale: 'en-GB'
                }, function () {
                    //success
                }, function (reason) {
                    //failed because of some reason
                    var alertPopup = $ionicPopup.alert({
                        title: 'Oops..!',
                        template: 'Something is not right , Please Try Again Later'
                    });
                    alertPopup.then(function (res) {
                        //console.log('Thank you for not eating my delicious ice cream cone');
                    });
                });

        });

    };

    $scope.stopSpeak = function () {
        $scope.popover.hide();

        $ionicPlatform.ready(function () {
            TTS
                .speak({
                    text: "",
                    locale: 'en-GB'
                }, function () {
                    //success
                }, function (reason) {
                    //failed because of some reason
                    var alertPopup = $ionicPopup.alert({
                        title: 'Oops..!',
                        template: 'Something is not right , Please Try Again Later'
                    });
                    alertPopup.then(function (res) {
                        //console.log('Thank you for not eating my delicious ice cream cone');
                    });
                });

        });

    };

    $scope.shareStory = function () {
        $scope.popover.hide();
        var message = "";

        for (var i = 0; i < $scope.story.description.length; i++) {

            message += $scope.story.description[i].paragraph + "      ";
        }

        message += " Get more stories on app  "

        $ionicPlatform.ready(function () {

            $cordovaSocialSharing
                .share(message, $scope.story.title, null, "https://play.google.com/store/apps/details?id=com.ionicframework.story371955") // Share via native share sheet
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occured. Show a message to the user
                });

        });

    };

    $scope.nextStory = function () {

        //console.log("Next Before:" + $scope.story.id + " : " + $stateParams.aId);
        var storiesLengthFinder = storiesFactory.getStories();
        //console.log(storiesLengthFinder.length);
        if ($scope.story.id === (storiesLengthFinder.length - 1)) {
            $stateParams.aId = 0;
            $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));
            $ionicScrollDelegate.scrollTop();
        } else {
            $stateParams.aId = parseInt($stateParams.aId) + 1;
            $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));
            $ionicScrollDelegate.scrollTop();
        }
        //console.log("Next After:" + $scope.story.id + " : " + $stateParams.aId);
    };

    $scope.prevStory = function () {
        var storiesLengthFinder = storiesFactory.getStories();
        //console.log(storiesLengthFinder.length);
        if ($scope.story.id === 0) {
            $stateParams.aId = storiesLengthFinder.length - 1;
            $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));
            $ionicScrollDelegate.scrollTop();
        } else {
            $stateParams.aId = parseInt($stateParams.aId) - 1;
            $scope.story = storiesFactory.getStory(parseInt($stateParams.aId, 10));
            $ionicScrollDelegate.scrollTop();
        }
        //console.log("Prev: " + $scope.story.id);
    };

    /*$scope.getRandomStory = function () {
    var storiesLengthFinder = storiesFactory.getStories();
    var randomNum = Math.floor((Math.random() * (storiesLengthFinder.length - 1)) + 1);
    return randomNum;
};*/
}])

.controller('QuotesController', ['$scope', '$stateParams', 'quotesFactory', function ($scope, $stateParams, quotesFactory) {

    $scope.quotes = quotesFactory.getQuotes();
    //$scope.quotations = quotesFactory.getQuotations(parseInt($stateParams.aId,10));      


}])

.controller('InterestingController', ['$scope', '$timeout', 'interestFactory', '$ionicLoading', function ($scope, $timeout, interestFactory, $ionicLoading) {

    $ionicLoading.show({
        template: '<ion-spinner></ion-spinner> Loading...'
    });

    // Using timeout just to show spinner for one sec
    $timeout(function () {
        $ionicLoading.hide();
    }, 2500);

    var cardTypes = interestFactory.getQuestions();


    $scope.cards = {
        master: Array.prototype.slice.call(cardTypes, 0),
        active: Array.prototype.slice.call(cardTypes, 0),
        discards: [],
        liked: [],
        disliked: []
    }

    $scope.cardDestroyed = function (index) {
        $scope.cards.active.splice(index, 1);
    };

    $scope.addCard = function () {
        var newCard = cardTypes[0];
        $scope.cards.active.push(angular.extend({}, newCard));
    }

    $scope.refreshCards = function () {
        // Set $scope.cards to null so that directive reloads
        $scope.cards.active = null;
        $timeout(function () {
            $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
        });
    }

    $scope.$on('removeCard', function (event, element, card) {
        var discarded = $scope.cards.master.splice($scope.cards.master.indexOf(card), 1);
        $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function (index) {
        // console.log('LEFT SWIPE');
        var card = $scope.cards.active[index];
        $scope.cards.disliked.push(card);
    };
    $scope.cardSwipedRight = function (index) {
        //console.log('RIGHT SWIPE');
        var card = $scope.cards.active[index];
        $scope.cards.liked.push(card);
    };
}])

.controller('QuotesDetailController', ['$scope', '$stateParams', 'quotesFactory', '$ionicPlatform', '$cordovaSocialSharing', '$ionicListDelegate', function ($scope, $stateParams, quotesFactory, $ionicPlatform, $cordovaSocialSharing, $ionicListDelegate) {


    $scope.quotations = quotesFactory.getQuotations(parseInt($stateParams.aId, 10));

    $scope.shareQuote = function (paragraph, author) {

        var quote = paragraph;
        $ionicListDelegate.closeOptionButtons();

        if (author == null || author == "") {
            quote += "   Get more Quotes on app  "
        } else {
            quote += " - By " + author + "   Get more Quotes on app  "
        }

        $ionicPlatform.ready(function () {

            $cordovaSocialSharing
                .share(quote, $scope.quotations.title, null, "https://play.google.com/store/apps/details?id=com.ionicframework.story371955") // Share via native share sheet
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occured. Show a message to the user
                });

        });

    };

    $scope.speak = function (paragraph) {
        $ionicPlatform.ready(function () {
            TTS
                .speak({
                    text: paragraph,
                    locale: 'en-GB'
                }, function () {
                    //success
                }, function (reason) {
                    //failed because of some reason
                    var alertPopup = $ionicPopup.alert({
                        title: 'Oops..!',
                        template: 'Something is not right , Please Try Again Later'
                    });
                    alertPopup.then(function (res) {
                        //console.log('Thank you for not eating my delicious ice cream cone');
                    });
                });

        });
    };

}])


.controller('FavoritesController', ['$scope', 'favoriteFactory', 'storiesFactory', '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout', '$ionicPlatform', '$cordovaVibration', function ($scope, favoriteFactory, storiesFactory, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout, $ionicPlatform, $cordovaVibration) {


    $scope.shouldShowDelete = false;

    $ionicLoading.show({
        template: '<ion-spinner></ion-spinner> Loading...'
    });

    // Using timeout just to show spinner for one sec
    $timeout(function () {
        $ionicLoading.hide();
    }, 1500);


    $scope.favorites = favoriteFactory.getFavorites();

    $scope.stories = storiesFactory.getStories();
    //console.log($scope.dishes, $scope.favorites);

    $scope.toggleDelete = function () {
        $scope.shouldShowDelete = !$scope.shouldShowDelete;
        console.log($scope.shouldShowDelete);
    }

    $scope.deleteFavorite = function (index) {



        var confirmPopup = $ionicPopup.confirm({
            title: 'Confirm Delete',
            template: 'Are you sure you want to delete this item?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                //console.log('Ok to delete');
                favoriteFactory.deleteFromFavorites(index);

                $ionicPlatform.ready(function () {
                    $cordovaVibration.vibrate(150);
                });

            } else {
                //console.log('Canceled delete');
            }
        });



        $scope.shouldShowDelete = false;

    }
}])

.controller('MenuCtrl', ['$scope', function ($scope) {

    var heading = 16;
    var para = 14;
    var footer = 16;

    $scope.increaseFont = function () {

        if (heading < 23) {
            para = para + 1;
            heading = heading + 1;
            footer = footer + 1;
            $scope.pStyle = {
                fontSize: para + 'px'
            };
            $scope.hStyle = {
                fontSize: heading + 'px'
            };
            $scope.fStyle = {
                fontSize: footer + 'px'
            };

        }
    };

    $scope.decreaseFont = function () {

        if (heading > 12) {
            para = para - 1;
            heading = heading - 1;
            footer = footer - 1;
            $scope.pStyle = {
                fontSize: para + 'px'
            };
            $scope.hStyle = {
                fontSize: heading + 'px'
            };
            $scope.fStyle = {
                fontSize: footer + 'px'
            };
        }
    };

}])


/*.controller('SettingsCtrl', ['$scope', '$rootscope', '$localStorage', function ($scope, $rootscope, $localStorage) {

    $rootScope.fields = $localStorage.getObject('fields', '{notifychecked: true}');

    $localStorage.storeObject('fields', $rootscope.fields);

}])*/



.filter('favoriteFilter', function () {
    return function (stories, favorites) {
        var out = [];
        for (var i = 0; i < favorites.length; i++) {
            for (var j = 0; j < stories.length; j++) {
                if (stories[j].id === favorites[i].id)
                    out.push(stories[j]);
            }
        }
        return out;

    }
});

;
