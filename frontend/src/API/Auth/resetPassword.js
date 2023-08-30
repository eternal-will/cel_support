const resetPassword = async (token, userId, password) => {
  try {
    const response = await fetch(
      "http://localhost:1377/api/user/reset-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, userId, password }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
