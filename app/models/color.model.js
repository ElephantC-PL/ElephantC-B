module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {      
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
    },{ tableName: 'content.color'});

    return Color;
};
