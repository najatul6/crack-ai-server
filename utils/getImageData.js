const getImageData = async (propmt) => {
  const form = new FormData();
  form.append("prompt", propmt);
  const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": process.env.CLIP_DROP_API,
    },
    body: form,
  });
  const buffer = await response.arrayBuffer();
  return buffer;
};

module.exports = { getImageData };
