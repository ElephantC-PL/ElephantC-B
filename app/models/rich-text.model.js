module.exports = (sequelize, Sequelize) => {
    const RichText = sequelize.define("rich-text", {      
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
        value: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },{ tableName: 'content.rich-text'});

    return RichText;
};
