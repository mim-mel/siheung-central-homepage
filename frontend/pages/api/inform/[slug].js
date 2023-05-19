import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  const MONGODB_ID = process.env.MONGODB_ID;
  const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${MONGODB_ID}:${MONGODB_PASSWORD}@centralamc.lwvahpg.mongodb.net/news?retryWrites=true&w=majority`
  );

  const db = client.db();

  const slug = req.query.slug;

  if (req.method === 'GET') {
    const list = await db.collection('inform').find({ id: slug }).toArray();

    res.status(200).json({
      message: '센트럴 소식 디테일 페이지를 불러왔습니다.',
      item: list,
    });
  }

  if (req.method === 'DELETE') {
    try {
      const item = await db.collection('inform').findOne({ id: slug });

      if (!item) {
        return res.status(404).json({
          message:
            '삭제하고자 하는 아이템을 데이테베이스에서 찾을 수 없습니다.',
        });
      }

      // Delete the item from the collection
      await db.collection('inform').deleteOne({ id: slug });

      res.status(200).json({ message: '아이템 삭제해 성공했습니다.' });
    } catch (error) {
      // Handle any errors that occur during the deletion process
      res.status(500).json({ message: '서버사이드에서 에러가 발생했습니다.' });
    }
  }

  client.close();
};

export default handler;
