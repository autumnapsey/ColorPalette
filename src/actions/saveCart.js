const saveCart = async cart => {
  try {
    const raw = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    });
    const response = await raw.json();

    return response;
  } catch (err) {
    throw err;
  }
};

export default saveCart;
