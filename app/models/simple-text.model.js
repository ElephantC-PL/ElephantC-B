module.exports = (sequelize, Sequelize) => {
    const SimpleText = sequelize.define("simple-text", {      
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
    },{ tableName: 'c.simple-texts'});

    return SimpleText;
};
