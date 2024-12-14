module.exports = (sequelize, Sequelize) => {
    const Collection = sequelize.define("collection", {      
        sectionId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        statusId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        variantId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        locationId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },        
        value: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },{ tableName: 'content.collection'});

    return Collection;
};
