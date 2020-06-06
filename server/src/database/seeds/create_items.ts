import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Bulbs', image: 'bulbs.svg' },
        { title: 'Batteries', image: 'batteries.svg' },
        { title: 'Papers and Cardboard', image: 'papers-cardboard.svg' },
        { title: 'Electronic Waste', image: 'electronics.svg' },
        { title: 'Organic Waste', image: 'organics.svg' },
        { title: 'Kitchen Oil', image: 'oil.svg' }
    ]);
}