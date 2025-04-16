const getUserProfile = async () => {
    const token = await getToken(); // tu función para leer el JWT
  
    const response = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return response.data; // contiene userId, email, expiration, role
  };
  