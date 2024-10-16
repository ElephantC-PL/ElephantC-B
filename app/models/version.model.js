module.exports = (sequelize, Sequelize) => {
    const Version = sequelize.define("version", {
        name: {
        type: Sequelize.STRING
        },        
    });

    return Version;
};