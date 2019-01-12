
exports.up = function(knex, Promise) {
    knex.schema.createTable('recipes', table => {
        table.increments();
        table.string('name').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
