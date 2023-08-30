const verifyEmail = async (userId, otp) => {
  try {
    const response = await fetch(
      "http://localhost:1377/api/user/verify-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, otp }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default verifyEmail;
