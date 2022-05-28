
export default async (req, res) => {
    const {key} = req.query;
    if(key === process.env.UPDATE_KEY){
      const route = `/projects/${req.body?.entity?.attributes?.route}`;
      try{
        await res.unstable_revalidate(route);
        res.status(200).json({
          status: 'Data updated'
        });
      }
      catch(e){
        res.json({status: 'failed to reavildate'});
      }
    }
    else{
      res.json({status: 'unauthorized'});
    }
  }