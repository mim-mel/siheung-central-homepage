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

    await db.collection('notice').insertOne({
      id: id,
      day: day,
      title: title,
      content: content,
      imgSrc: imgSrc,
      imgId: imgId,
      isNew: false,
    });

    client.close();

    res.status(200).json({ message: '공지사항이 성공적으로 등록되었습니다.' });
  }

  if (req.method === 'GET') {
    //데이터 베이스의 콜렉션에 접근하여 find 함수로 모든 게시글을 불러냄
    const lists = await db
      .collection('notice')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      message: '공지사항 페이지 리스트를 불러왔습니다.',
      content: lists,
    });
  }
};

export default handler;
