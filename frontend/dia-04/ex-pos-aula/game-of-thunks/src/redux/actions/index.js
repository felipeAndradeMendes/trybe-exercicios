export const getCharacteres = () => ({
  type: 'getChar',
});

export const showCharacteres = (data) => ({
  type: 'showChar',
  payload: data,
});

export const showError = (e) => ({
  type: 'showError',
  payload: e,
});

export function fetchChar(char) {
  return async (dispatch) => {
    dispatch(getCharacteres())
    try {
      const result = await fetch(`https://anapioficeandfire.com/api/characters?name=${char}`)
      const data = await result.json();
      
      const { name, born, playedBy, url } = await data[0];
      const charInfos = {
        name,
        born,
        playedBy,
        url,
      }
    
      dispatch(showCharacteres(charInfos));      
    } catch (error) {
      dispatch(showError(error));
    }
  };
}