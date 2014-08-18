(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.setCurrent = function(setTab) {
			this.tab = setTab;
		};

		this.isCurrent = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: "Oh, so pretty.",
		reviews: [
			{ body: "I love it!", stars: 5, author: "fanboy@apple.com"},
			{body: "Meh", stars: -2, author: "grumpy@grumpycat.com"}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: "A rare gem with 5 facets",
		reviews: [
			{ body: "I love it!", stars: 5, author: "fanboy@apple.com"},
			{body: "Meh", stars: -2, author: "grumpy@grumpycat.com"}
		],
		canPurchase: false,
		soldOut: false
	}
	];

})();
