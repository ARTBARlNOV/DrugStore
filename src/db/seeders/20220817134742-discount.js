module.exports = {
  async up(queryInterface, Sequelize) {
    const arrDrugs = [
      {
        idDrugs: 5, discount: 10, date: '2022-08-23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        idDrugs: 5, discount: 10, date: '2022-08-24', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        idDrugs: 6, discount: 15, date: '2022-08-23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        idDrugs: 6, discount: 15, date: '2022-08-24', createdAt: new Date(), updatedAt: new Date(),
      },

    ];
    await queryInterface.bulkInsert('Discounts', arrDrugs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Discounts', null, {});
  },
};
