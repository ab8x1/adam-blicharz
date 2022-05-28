
export default async (req, res) => {
    const {key} = req.query;
    if(key === process.env.UPDATE_KEY){
      const project_route = `/projects/${req.body?.entity?.attributes?.route}`;
      const index_route = `/`;
      try{
        await res.unstable_revalidate(project_route);
        await res.unstable_revalidate(index_route);
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