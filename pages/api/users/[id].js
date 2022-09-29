import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const result = await axios({
      method: 'get',
      url: 'https://api.github.com/users/' + id
    });

    res.status(200).send(result.data);

  } catch (error) { res.status(200).send({ err: error }); }
}
