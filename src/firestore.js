const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore ({
    projectId:'skinscan-capstone',
    databaseId:'skinscan'
})

module.exports = { firestore }


