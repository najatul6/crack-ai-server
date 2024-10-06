const getImageData=async(propmt)=>{
    const form = new FormData();
    form.append("prompt", propmt);
    fetch("https://clipdrop-api.co/text-to-image/v1", {
        method: "POST",
        headers: {
          "x-api-key": process.env.CLIP_DROP_API,
        },
        body: form,
      })
        .then((response) => response.arrayBuffer())
        .then((buffer)=>{
            return buffer
        })
}

module.exports={getImageData}