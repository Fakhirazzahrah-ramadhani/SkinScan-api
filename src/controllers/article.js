const getArticle = async (req, res) => {
  try {
    const article = [
      {
        article: {
          title: "Penyakit Kulit: Jenis, Penyebab, dan Cara Mengatasinya",
          image:
            "https://www.alodokter.com/wp-content/uploads/2019/04/Macam-macam-Penyakit-Kulit-dan-Cara-Mengatasinya.jpg",
          description:
            "Penyakit kulit ada beragam dengan penyebab yang bervariasi pula. Ada penyakit kulit yang disebabkan oleh reaksi alergi, ada pula yang terjadi karena infeksi jamur hingga bakteri. Begitu pun dengan gejalanya, dari penyakit kulit yang ringan hingga berat. Oleh karena itu, penting bagi Anda mengetahui beragam penyakit kulit beserta cara mengatasinya, agar Anda lebih waspada terhadap kondisi ini. Kulit merupakan organ terbesar pada tubuh. Fungsinya untuk melindungi tubuh dari bakteri, virus, dan sinar matahari, membantu mengatur suhu tubuh, merasakan sensasi sentuhan dan nyeri, serta menghasilkan vitamin D.\nSebagai bagian terluar tubuh yang menerima berbagai paparan dari lingkungan, kulit dapat dengan mudah mengalami gangguan atau penyakit. Penyakit kulit dapat muncul secara tak terduga, dan banyak orang menganggap penyebabnya selalu berkaitan dengan kebersihan tubuh yang buruk. Padahal, ada banyak faktor yang bisa menyebabkan munculnya penyakit kulit. Macam-Macam Penyakit Kulit \nBerikut adalah jenis-jenis penyakit kulit berdasarkan penyebabnya: \n1. Penyakit kulit karena peradangan Peradangan pada kulit disebut dermatitis.\nKondisi ini terjadi ketika kulit bersentuhan dengan bahan yang bersifat iritatif atau dengan alergen (zat atau benda yang menyebabkan reaksi alergi). Gejala dermatitis umumnya berupa gatal, kemerahan, dan bengkak. Berdasarkan penyebabnya, ada beberapa jenis dermatitis, yaitu: \n",
          bulletPoints: [
            {
              title: "Dermatitis kontak iritan",
              description:
                "Dermatitis kontak iritan termasuk penyakit kulit yang paling sering terjadi. Penyakit kulit ini ditandai dengan munculnya ruam, kulit kering, iritasi, atau bahkan luka lepuh pada area kulit yang bersentuhan dengan zat iritan. Beberapa contoh zat iritan adalah bahan kimia, pemutih baju, deterjen, alkohol, dan sabun mandi.",
            },
            {
              title: "Dermatitis kontak alergi",
              description:
                "Gejala dermatitis kontak alergi, seperti kemerahan dan bengkak, muncul ketika kulit bersentuhan dengan alergen. Alergen dapat berupa bahan kimia, kosmetik, cat kuku, sarung tangan lateks, protein, atau perhiasan.\nPada orang normal, bersentuhan dengan alergen tersebut tidak akan menimbulkan reaksi alergi. Namun pada penderita alergi, bersentuhan dengan alergen akan menimbulkan gejala dermatitis. Terkadang kondisi ini disebut sebagai eksim basah.",
            },
            {
              title: "Dermatitis atopik (eksim)",
              description:
                "Eksim ditandai dengan kulit merah, gatal, kering, atau bersisik. Banyak orang menyebut kondisi ini dengan istilah eksim kering. Keluhan ini sering muncul pada kulit di bagian leher, lipatan siku, atau bagian belakang lutut. Jika digaruk, kulit bersisik bisa mengelupas mengeluarkan cairan.\nPenyakit kulit jangka panjang (kronis) yang biasanya dimulai saat bayi ini, sering kambuh secara tiba-tiba dan kemudian mereda.",
            },
            {
              title: "Dermatitis seboroik",
              description:
                "Penyakit kulit ini biasanya mengenai area tubuh yang berminyak, seperti wajah, punggung, dan dada. Gejalanya berupa kulit kemerahan dan bersisik. Jika mengenai kulit kepala, dermatitis seboroik menyebabkan ketombe yang membandel. Pada bayi, penyakit kulit ini dikenal sebagai cradle cap.",
            },
          ],
        },
      },
    ];
    res.status(200).json({ status: "success", data: article });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error getting articles", error });
  }
};

module.exports = { getArticle };

// class Article {
//     // Hapus atau tambahkan kembali constructor jika diperlukan

//     async save(collection, data) {
//         console.log(`Saving to collection: ${collection}, data: ${JSON.stringify(data)}`);
//         const docRef = firestore.collection(collection).doc(data.docName);
//         await docRef.set(data);
//         console.log('Data saved successfully');
//     }

//     async saveSubCollection(rootCol, rootDocName, subCol, subColData) {
//         const docRef = firestore.collection(rootCol).doc(rootDocName).collection(subCol).doc(subColData.docName);
//         await docRef.set(subColData);
//     }

//     async saveByPath(path, data) {
//         const docRef = firestore.doc(path);
//         await docRef.set(data);
//     }
// }
