module.exports = (sequelize, Sequelize) => {
    const RichText = sequelize.define("rich-text", {      
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
    },{ tableName: 'content.rich-text'});

    return RichText;
};
