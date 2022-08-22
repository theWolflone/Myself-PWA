let obtener_persona_mail = async(mail)=>{
      try{
            const response = await axios({
                  method: 'get',
                  params: {mail:mail},
                  url: `http://localhost:3000/api/buscar-persona-mail`,
                  responseType: 'json'
            });

            return response.data.cliente;
      }catch(error){
            console.log(error);
      }
}

obtener_persona_mail('gabo170506@gmail.com');