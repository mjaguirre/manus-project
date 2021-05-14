import http from './http';

const getCharactersList = async ({ page, status, species, gender, name }) => {
  let baseQuery = `character?page=${page}`;
  if (status && status.length >= 1) {
    baseQuery += `&status=${status}`;
  }
  if (species && species.length >= 1) {
    baseQuery += `&species=${species}`;
  }
  if (gender && gender.length >= 1) {
    baseQuery += `&gender=${gender}`;
  }
  if (name && name.length >= 1) {
    baseQuery += `&name=${name}`;
  }
  return http.get(baseQuery);
};

export default getCharactersList;
