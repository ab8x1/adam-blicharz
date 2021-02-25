import sendEmail from '../../modules/Mailer/sendEmail';

export default async (req, res) => {
    const {name, email, text} = req.body;
    let status;
    try{
      status = await sendEmail(email, name, text);
    }
    catch(e){
      console.log('error: ', e);
      status = false;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({status});
  }