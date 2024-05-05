'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('generos', [
      { descricao: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Drama', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Sci-Fi', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Thriller', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Adventure', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Mystery', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Animation', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Crime', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Family', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'History', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Music', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'War', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Western', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Documentary', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Biography', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Sport', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Musical', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Psychological', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Superhero', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Thriller', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Romantic Comedy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Political', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Fantasy Adventure', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Teen', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Historical Drama', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Science Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Crime Drama', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Fantasy Comedy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Mockumentary', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Courtroom Drama', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Neo-Noir', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Slasher', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'War Drama', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Space Opera', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Spy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Zombie', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Gangster', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Black Comedy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Surreal', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Apocalyptic', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Post-Apocalyptic', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Cyberpunk', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Historical Epic', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Conspiracy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Heist', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Alien Invasion', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Survival', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Time Travel', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Neo-Western', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Road Movie', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Gothic', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Kaiju', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Buddy Cop', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Epic Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Monster', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Art House', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Robots', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
