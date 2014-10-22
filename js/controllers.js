'use strict';

/* Controllers */

var exhibitionApp = angular.module('exhibitionApp', []);

exhibitionApp.controller('ArtBinderCtrl', function($scope) {
  $scope.exhibitions = [
    {'title': 'EXCAVATION BY PHILIP GOVEDORE',
     'date': 'March 22, 2014',
 	 'location': 'David Kordansky',
 	 'url': 'https://38.media.tumblr.com/tumblr_m4txjzeEAO1r9tl9xo3_500.jpg',
 	 'desc': 'Verbal description uses nonvisual language to convey the visual world. It can navigate a visitor through a museum and orient a listener.'},
 	 {'title': 'Jean De Pomereu Retrospective',
     'date': 'March 25, 2014',
 	 'location': 'Canine Gallery',
 	 'url': 'http://2.bp.blogspot.com/-dxfBzfVnosQ/TfszvM7Z6hI/AAAAAAAAAFQ/ozwg0sI_S00/s1600/upside+down.jpg',
 	 'desc': 'A work of art, or provide access to the visual aspects of a performance: Verbal description uses nonvisual language to convey the visual world.'},
 	 {'title': 'Burden of Truth',
 	 'url': 'https://33.media.tumblr.com/tumblr_m55a47NNIY1qzfm4so1_400.jpg',
     'date': 'March 22, 2014',
 	 'location': 'Francesca and Pine',
 	 'desc': 'It can navigate a visitor through a museum, orient a listener to a work of art, or provide access to the visual aspects of a performance.'},
 	 {'title': 'What Space is Like',
     'date': 'March 30, 2014',
 	 'location': 'Tilman/Unger',
 	 'url': 'http://ionegiantmag.files.wordpress.com/2013/12/kaws-artbasel-03.jpg?w=500&h=500',
 	 'desc': 'Verbal description uses nonvisual language to convey the visual world. It can navigate a visitor through a museum and orient a listener.'},
 	 {'title': 'Loose Knit embrace',
     'date': 'March 25, 2014',
 	 'location': 'Canine Gallery',
 	 'url': 'https://farm6.staticflickr.com/5236/14207270596_caf1a12583_z.jpg',
 	 'desc': 'A work of art, or provide access to the visual aspects of a performance: Verbal description uses nonvisual language to convey the visual world.'},
 	 {'title': 'Beauty Explode',
 	 'url': 'http://41.media.tumblr.com/a773f4f3183427b570d11b148661f058/tumblr_my8hdsdRG91qc8yajo1_500.jpg',
     'date': 'March 22, 2014',
 	 'location': 'Francesca and Pine',
 	 'desc': 'It can navigate a visitor through a museum, orient a listener to a work of art, or provide access to the visual aspects of a performance.'},
 	  {'title': 'Horizontal is the new vertical',
     'date': 'March 25, 2014',
 	 'location': 'Color and SHape',
 	 'url': 'http://artsinmiami.org/wp-content/uploads/2014/08/HR_HellyNahmad_1086-500x500.jpg',
 	 'desc': 'A work of art, or provide access to the visual aspects of a performance: Verbal description uses nonvisual language to convey the visual world.'},
 	 {'title': 'Ken Price Retrospective',
 	 'url': 'http://spd.sightunseen.com/wordpress/wp-content/uploads/2012/12/AB_Ken-Price-500x500.jpg?c10fa8',
     'date': 'March 22, 2014',
 	 'location': 'Francesca and Pine',
 	 'desc': 'It can navigate a visitor through a museum, orient a listener to a work of art, or provide access to the visual aspects of a performance.'}

  ];
});