
exports.seed = function(knex) {
  return knex('cats').truncate()
    .then(function () {
      return knex('cats').insert([
        { name: "Ziggy", hobby: "eating flies" },
        { name: "Abi", hobby: "breaking computers" },
        { name: "Zuri", hobby: "pirating" },
        { name: "Pusskins", hobby: "decapitating rabbits" }
      ]);
    });
};
