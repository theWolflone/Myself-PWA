function show(){let e=0,s="",a=document.querySelectorAll("input");for(console.log(a),i=0;i<a.length;i++)1==a[i].checked&&(num=a[i].value,e=Number(e)+Number(num));e>17&&e<=33?(s="Bajo",res2="Es importante que introduzcas cambios para conseguir unos niveles de salud adecuados. Existen varias áreas que deberías revisar con el fin de incrementar los niveles de salud que alcanzas actualmente.",res3="success"):e>=34&&e<=53?(s="Medio",res2="<p style='font-family: 'Montserrat';'>'Tenés algunos hábitos saludables en tu estilo de vida pero te convendría realizar algunos ajustes con el objetivo de mejorar aun más tu salud e incrementar tus resultados'</p>",res3="error"):(s="¡Felicidades",res2="Eres una persona que se cuida y que posee un estilo de vida saludable. ¡Sigue así!",res3="success"),showalert(e,s)}function showalert(e,s){Swal.fire({title:s,text:res2,icon:res3,confirmButtonText:"Ok",confirmButtonColor:"#20997b"})}