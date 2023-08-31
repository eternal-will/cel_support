const deleteIssues = async (Id) => {
  try {
    const response = await fetch(
      "http://localhost:1377/api/complaint/delete-complaint",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Id }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteIssues;
