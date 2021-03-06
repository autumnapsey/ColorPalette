const fetchColors = async num => {
  try {
    const raw = await fetch('/api/colors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num }),
    });
    const response = await raw.json();

    return response;
  } catch (err) {
    throw err;
  }
};

export default fetchColors;
