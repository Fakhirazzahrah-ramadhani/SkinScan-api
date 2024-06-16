const { firestore } = require('../firestore')
const collectionRef = firestore.collection('article');

class Article {
  async getArticle(res) {
    try {
      const snapshot = await collectionRef.get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json({
        status:"success",
        data:articles
      });
    } catch (error) {
      console.error('Error getting articles: ', error);
    }
  }
}

module.exports = new Article();
