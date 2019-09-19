const responseHandler = response =>
  !response.ok ? { status: response.status, error: response.error } : response;

const fetchColors = async () => {
  try {
    const raw = await fetch('/api/colors');
    const formattedResponse = await responseHandler(raw).json();
    return formattedResponse.colors;
  } catch (err) {
    throw err;
  }
};

export default fetchColors;
