module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {      
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
    },{ tableName: 'content.color'});

    return Color;
};
