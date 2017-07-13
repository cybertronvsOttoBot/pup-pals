exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('pups', (table) => {
      table.foreign('user_id').references('users.id');
    }),
    knex.schema.table('events',(table)=> {
      table.foreign('creator_user_id').references('users.id');
    }),
    knex.schema.table('event_user',(table)=> {
      table.foreign('event_id').references('events.id');
      table.foreign('user_id').references('users.id');
    }),
    knex.schema.table('pup_updates', (table) => {
      table.foreign('pup_id').references('pups.id');
    }),
    knex.schema.table('event_pup', (table) => {
      table.foreign('event_id').references('events.id');
      table.foreign('pup_id').references('pups.id');
    }),
    knex.schema.table('event_posts', (table) => {
      table.foreign('user_id').references('users.id');
      table.foreign('event_id').references('events.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('pups', (table) => {
      table.dropForeign('user_id');
    }),
    knex.schema.table('events', (table) => {
      table.dropForeign('creator_user_id');
    }),
    knex.schema.table('event_user', (table) => {
      table.dropForeign('event_id');
      table.dropForeign('user_id');
    }),
    knex.schema.table('pup_updates', (table) => {
      table.dropForeign('pup_id');
    }),
    knex.schema.table('event_pup', (table) => {
      table.dropForeign('event_id');
      table.dropForeign('pup_id');
    }),
    knex.schema.table('event_posts', (table) => {
      table.dropForeign('user_id');
      table.dropForeign('event_id');
    })
  ]);
};
