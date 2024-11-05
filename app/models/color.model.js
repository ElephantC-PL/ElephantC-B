module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {      
        sectionId: {
            type: Sequelize.INTEGER,            
        },
        versionId: {
            type: Sequelize.INTEGER,         
        },
        location: {
            type: Sequelize.STRING,         
        },
        value: {
            type: Sequelize.STRING
        }
    },{ tableName: 'content.color'});

    return Color;
};
