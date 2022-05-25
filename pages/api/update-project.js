
export default async (req, res) => {
    const {key} = req.body;
    res.statusCode = 200;
    console.log(req.body);
    console.log('fired route');
    res.setHeader('Content-Type', 'application/json');
    res.json({
      status: 'done'
    });
  }