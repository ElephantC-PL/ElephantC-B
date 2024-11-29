module.exports = (sequelize, Sequelize) => {
    const EmbedHtml = sequelize.define("embed-html", {      
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
        value: {
            type: Sequelize.STRING
        }
    },{ tableName: 'content.embed-html'});

    return EmbedHtml;
};
