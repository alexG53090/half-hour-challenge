exports.seed = function(knex, Promise) {
    return knex("bcos").del().then(function(){
        return Promise.all([
            knex("bcos").insert({
                player: 'brock',
                position: 'QB',
                number: '10',
                salary: '100000',
                age: '25',
            }),
            knex("bcos").insert({
                player: 'DT',
                position: 'WR',
                number: '11',
                salary: '20000',
                age: '26',
            }),
        ]);
    });
};
