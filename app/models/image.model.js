module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {      
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
        width: {
            type: Sequelize.INTEGER,     
            allowNull: false,       
        },
        height: {
            type: Sequelize.INTEGER,     
            allowNull: false,    
        },    
        fileName: {
            type: Sequelize.STRING,
            allowNull: false,
        },    
        alt: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },{ tableName: 'content.image'});

    return Image;
};
