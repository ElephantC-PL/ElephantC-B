module.exports = (sequelize, Sequelize) => {
    const SimpleText = sequelize.define("simple-text", {      
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
    },{ tableName: 'content.simple-text'});

    return SimpleText;
};
