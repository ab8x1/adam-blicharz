
export default async (req, res) => {
    const {key} = req.query;
    if(key === process.env.UPDATE_KEY){
      const project_route = `projects/${req.body?.entity?.attributes?.route}`;
      try{
        ['/','/pl/'].forEach(locale => {
          await res.unstable_revalidate(`${locale}${project_route}`); //update changed project
          await res.unstable_revalidate(locale); //update index
        })
        res.status(200).json({
          status: 'Data updated'
        });
      }
      catch(e){
        console.log(e);
        res.json({status: 'failed to reavildate'});
      }
    }
    else{
      res.json({status: 'unauthorized'});
    }
  }