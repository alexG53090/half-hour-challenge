exports.up = function(knex, Promise) {
  return knex.schema.createTable('bcos', function(table){
      table.increments();
      table.string('player');
      table.string('position');
      table.integer('number');
      table.integer('salary');
      table.integer('age');
    })

};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('bcos');
};
