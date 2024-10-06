const image_hosting_api=`https://api.imgbb.com/1/upload?key=${process.env.IMG_BB_API}`

const getImageUrl = async (buffer,prompt) => {
  const imageFormData = new FormData();
  imageFormData.append(
    "image",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpg`
  );
  const response = await fetch(image_hosting_api,{
    method: "POST",
    body: imageFormData,
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  })
  const imgData=await response.json();
  return imgData
};

module.exports=getImageUrl