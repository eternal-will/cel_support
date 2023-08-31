const getUser = async (userId, userToDeleteId) => {
  try {
    const response = await fetch("http://localhost:1377/api/user/delete-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, userToDeleteId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
