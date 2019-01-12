
exports.up = function(knex, Promise) {
    knex.schema.createTable('instructions', table => {
        table.increments();
        table.string('instructions').notNullable();
        table.integer('dish_id').unsigned().unique();
        table.foreign('dish_id').references('id').on('dishes');
  })
};

exports.down = function(knex, Promise) {
  
};
