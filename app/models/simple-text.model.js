module.exports = (sequelize, Sequelize) => {
    const SimpleText = sequelize.define("simple-text", {      
        locationId: {
            type: Sequelize.INTEGER,
            references: 'locations', 
            referencesKey: 'id'
        },
        versionId: {
            type: Sequelize.INTEGER,
            references: 'versions',
            referencesKey: 'id' 
        },
        value: {
            type: Sequelize.STRING
        }
    },{ tableName: 'c.simple-texts'});

    return SimpleText;
};