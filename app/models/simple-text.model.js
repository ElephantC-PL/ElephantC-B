const { col } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const SimpleText = sequelize.define("simple-text", {      
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
        collectionId: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        value: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },{ tableName: 'content.simple-text'});

    return SimpleText;
};
