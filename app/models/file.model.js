module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {      
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
        fileName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        linkText: {
            type: Sequelize.STRING,
            allowNull: false,
        }       
    },{ tableName: 'content.file'});

    return File;
};
