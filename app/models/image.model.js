module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {      
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
        width: {
            type: Sequelize.INTEGER,            
        },
        height: {
            type: Sequelize.INTEGER,         
        },    
        fileName: {
            type: Sequelize.STRING
        },    
        alt: {
            type: Sequelize.STRING
        }
    },{ tableName: 'content.image'});

    return Image;
};
