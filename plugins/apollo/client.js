export default ({app:{apolloProvider:{clients:{defaultClient}}}}, inject) => {
  inject('query', async (options)=>{
    try{
      const data = await defaultClient.query(options);
      return {
        ...data,
        error: null,
        isOk:true
      }
    }catch (e){
      return {data:null,error:e};
    }
  });


  inject('mutation', async (options)=>{
    try{
      const data = await defaultClient.mutate(options);
      return {
        ...data,
        error: null,
        isOk:true
      }
    }catch (e){
      return {data:null,error:e};
    }
  });
}
