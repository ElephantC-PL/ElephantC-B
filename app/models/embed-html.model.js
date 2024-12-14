module.exports = (sequelize, Sequelize) => {
    const EmbedHtml = sequelize.define("embed-html", {      
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
    },{ tableName: 'content.embed-html'});

    return EmbedHtml;
};
