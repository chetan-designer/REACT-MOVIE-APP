export { removeperson } from "../reducers/personSlice";
import axios from '../../Utilis/axios';
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let theUltimatedetails = {
        detail: detail.data,
        externalid: externalid.data,
        combinedCredits: combinedCredits.data,
        tvCredits: tvCredits.data,
        movieCredits: movieCredits.data,
      };
        dispatch(loadperson(theUltimatedetails));
        // console.log(theUltimatedetails);
  } catch (error) {
    console.error(error);
  }
};
