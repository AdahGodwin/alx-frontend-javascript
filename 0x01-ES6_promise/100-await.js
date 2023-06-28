import {createUser, uploadPhoto } from "utils.js";

export const asyncUploadUser = async () => {
    try {
        const photoReponse = await uploadPhoto();
        const userResponse = await createUser();
       return {
            photo: photoReponse,
            user: userResponse,
          }
    } catch (error) {
        return {
            photo: null,
            user: null,
          }
    }
}