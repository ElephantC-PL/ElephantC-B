module.exports = (sequelize, Sequelize) => {
    const SimpleText = sequelize.define("simple-text", {      
        sectionId: {
            type: Sequelize.INTEGER,            
        },
        versionId: {
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
