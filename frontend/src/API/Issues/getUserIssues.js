const getUserIssues = async (userId) => {
  try {
    const response = await fetch(
      "http://localhost:1377/api/complaint/get-complaints",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getUserIssues;
