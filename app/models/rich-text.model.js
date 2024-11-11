module.exports = (sequelize, Sequelize) => {
    const RichText = sequelize.define("rich-text", {      
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
    },{ tableName: 'content.rich-text'});

    return RichText;
};
