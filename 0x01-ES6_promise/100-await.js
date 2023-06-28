import {  uploadPhoto, createUser } from "./utils";

export default asyncUploadUser = async () => {
    
        const photoReponse = await uploadPhoto();
        const userResponse = await createUser();
       
        if(photoReponse == null || userResponse == null) {
            return {
                photo: null,
                user: null,
              }
        }
        return {
            photo: photoReponse,
            user: userResponse,
          }
    }