import React from 'react'


function FileUpload()
{

    //  const [uploadVal, setUploadVal] = React.useState('')


     function uploadFn(e)
     {
           var fileVal = e.target.files[0];
           var reader = new FileReader()
                        reader.readAsDataURL(fileVal)// provide url for our uploaded image 
                    

            console.log(reader)// print object details of filereader
            reader.onloadend = function() // image load [so ikkada event listener onloadend idi filereader object lone untadi]avvagane manaki ee function call jaruguthadi 
            {
                  console.log(reader.result) // provide string url
                  var res = reader.result.toString()
                  console.log(res)// url in string format 
                  document.getElementById('im').src = res // dynamic ga iccha 
            }
     }
      return (
        <div>
             <input type="file" onChange = {uploadFn} />
             <div style={{margin:"10px", width:"400px"}}><img id="im" width="100%"/></div>
        </div>
      )

}

export default FileUpload