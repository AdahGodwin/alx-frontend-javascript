import { uploadPhoto, createUser } from "./utils";

export default asyncUploadUser = async () => {

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