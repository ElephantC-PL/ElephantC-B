module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define("collection", {      
        sectionId: {
            type: Sequelize.INTEGER,
        },
        statusId: {
            type: Sequelize.INTEGER,
        },
        variantId: {
            type: Sequelize.INTEGER,
        },
        locationId: {
            type: Sequelize.INTEGER,
        },        
        value: {
            type: Sequelize.STRING
        }
    },{ tableName: 'content.collection'});

    return Collection;
};
