module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {      
        sectionId: {
            type: Sequelize.INTEGER,            
        },
        versionId: {
            type: Sequelize.INTEGER,         
        },
        locationId: {
            type: Sequelize.INTEGER,         
        }, 
        fileName: {
            type: Sequelize.STRING
        },
        linkText: {
            type: Sequelize.STRING
        }       
    },{ tableName: 'content.file'});

    return File;
};
