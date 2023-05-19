import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  const MONGODB_ID = process.env.MONGODB_ID;
  const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${MONGODB_ID}:${MONGODB_PASSWORD}@centralamc.lwvahpg.mongodb.net/news?retryWrites=true&w=majority`
  );

  const db = client.db();

  if (req.method === 'POST') {
    const { id, day, title, content, imgSrc, imgId } = req.body;

    await db.collection('inform').insertOne({
      id: id,
      day: day,
      title: title,
      content: content,
      imgSrc: imgSrc,
      imgId: imgId,
    });

    client.close();

    res
      .status(200)
      .json({ message: '센트럴소식이 성공적으로 등록되었습니다.' });
  }

  if (req.method === 'GET') {
    const lists = await db
      .collection('inform')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      message: '센트럴 소식 리스트를 불러왔습니다.',
      content: lists,
    });
  }
};

export default handler;
