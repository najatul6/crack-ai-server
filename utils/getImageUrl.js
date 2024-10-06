const getImageUrl = async (buffer) => {
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
  const imageData=await response.json();
  return imageData
};

module.exports=getImageUrl