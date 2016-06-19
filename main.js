var App = angular.module('PCApp', ['ngMaterial']);

App.controller('PCCtrl', ['$scope', function($scope) {

  $scope.articles = [
    {
      title: "New Project Civility fosters kindness, positivity at Talawanda High School",
      date: "MAY 22, 2016",
      url: "http://www.wcpo.com/news/insider/new-project-civility-fosters-kindness-positivity-at-talawanda-high-school",
      exampleText: "HAMILTON — It’s Character Week in Hamilton through Sunday, under a city council proclamation that honored a Miami University organization that promotes civility in Butler County. Accepting the proclamation was Segi Adeseha, 20, of Fairfield, a junior kinesiology major who plans a career in occupational therapy. She’s co-director of Miami University’s Project Civility, which began in 2011 at Miami University Hamilton, and since has spread to Miami’s Middletown and Oxford campuses."
    },
    {
      title: "Project Civility for change",
      date: "APRIL 17, 2015",
      url: "http://miamistudent.net/?p=17005311",
      exampleText: "With the vandalism that took place in Wells Hall on March 4, Project Civility, a subcommittee under the Student Government Association (SGA) of the regional campuses, is working to promote courtesy and respect within the Miami community. Project Civility was founded by Kofi Ansah and Shan Qureshi in 2012 “in response to rude, disrespectful and hurtful comments and behaviors demonstrated by students at the beginning of the 2011-12 academic year,” according to its profile on The Hub."
    },
    {
      title: "Miami’s Project Civility branches out to schools, community",
      date: "FEBRUARY 11, 2016",
      url: "http://www.journal-news.com/news/news/local/miamis-project-civility-branches-out-to-schools-co/nqNpW/",
      exampleText: "HAMILTON — It’s Character Week in Hamilton through Sunday, under a city council proclamation that honored a Miami University organization that promotes civility in Butler County. Accepting the proclamation was Segi Adeseha, 20, of Fairfield, a junior kinesiology major who plans a career in occupational therapy. She’s co-director of Miami University’s Project Civility, which began in 2011 at Miami University Hamilton, and since has spread to Miami’s Middletown and Oxford campuses."
    },
    {
      title: "Hamilton set to become ‘City of Character’",
      date: "OCTOBER 8, 2013",
      url: "http://www.journal-news.com/news/news/hamilton-set-to-become-city-of-character/nbJYy/",
      exampleText: "HAMILTON — Inspired by the success of the Hamilton City School District in becoming a national “District of Character,” a group of citizens have banded together to make Hamilton a “City of Character.” Led by Mayor Pat Moeller, the group includes representatives from local service organizations, the school district, the Chamber of Commerce and Miami University Hamilton, the mayor said, as well as several residents."
    },
    {
      title: "Seniors receive President's Distinguished Service Award",
      date: "APRIL 23, 2014",
      url: "http://miamioh.edu/news/campus-news/2014/04/presidents-service.html",
      exampleText: "Shan J. Qureshi – zoology major from Liberty Township. Qureshi was awarded for his service to the Miami University Hamilton Student Government Association and his contributions to the Project Civility Initiative at the Hamilton and Oxford campuses."
    }
  ]

  $scope.schools = [
    {
      name: "Miami University Oxford",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/miamiUniversity.jpg",
      members: 72
    },
    {
      name: "Miami University Hamilton",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/miamiHamilton.jpg",
      members: 72
    },
    {
      name: "Miami University Middletown",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "images/miamiMiddletown.jpg",
      members: 72
    },
    {
      name: "University of Florida",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/uofflorida.jpg",
      members: 72
    },
    {
      name: "University of Dayton",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/uofdayton.jpg",
      members: 72
    },
    {
      name: "Talawanda High School",
      url: "http://hotdot.pro/en/404/",
      imageUrl: "images/talawanda.jpg",
      members: 72
    }
  ]
}]);

App.directive('imageonload', function() {
    return {
        restrict: 'A',

        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});
