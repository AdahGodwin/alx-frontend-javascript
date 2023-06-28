import { uploadPhoto, createUser } from "./utils";

export default asyncUploadUser = async () => {

  try {
    const photoReponse = await uploadPhoto();
    const userResponse = await createUser();

    if (photoReponse == null || userResponse == null) {
      const res = {
        photo: null,
        user: null,
      }
      return res;
    }
    const resp = {
      photo: photoReponse,
      user: userResponse,
    }
    return resp;
  } catch (error) {
    return error;
  }
}