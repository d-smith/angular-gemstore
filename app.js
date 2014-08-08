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

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: "Oh, so pretty.",
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: "A rare gem with 5 facets",
		canPurchase: false,
		soldOut: false
	}
	];

})();
