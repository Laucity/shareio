let getPhoto = async (userId, token) => {
  let photoApi = `https://graph.facebook.com/v2.3/${userId}/picture?width=40&redirect=false&access_token=${token}`;
  
  try {
    let response = await fetch(photoApi);
    let responseData = await response.json();

      
    let photo = {
      url: responseData.data.url,
      height: responseData.data.height,
      width: responseData.data.width
    };
    return photo;
  } catch (error) {
    return null;
  }
  
}

let getInfo = async (userId, token) => {
  let infoApi = `https://graph.facebook.com/v2.3/${userId}?fields=name,email&access_token=${token}`;

  try {
    let response = await fetch(infoApi);
    let info = await response.json();

    return info;
  } catch (error) {
    return null;
  }

}

export {
  getPhoto,
  getInfo
};