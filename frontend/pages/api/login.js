const onLogin = (req, res) => {
  if (req.method === 'POST') {
    //프론트 사이드에서 받아온 데이터추출
    const id = req.body.id;
    const password = req.body.password;

    if (
      id === process.env.ADMIN_ID &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(200).json({ message: '로그인이 완료되었습니다.', code: 1000 });
    } else {
      res.status(400).json({
        message: '아이디 혹은 비밀번호가 일치하지 않습니다',
        code: 3003,
      });
    }
  } else {
    res.status(400).json({ error: '잘못된 요청입니다' });
  }
};

export default onLogin;
