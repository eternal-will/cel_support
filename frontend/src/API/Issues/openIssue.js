const openIssue = async (complaintId, adminId) => {
  try {
    const response = await fetch(
      "http://localhost:1377/api/complaint/open-complaint",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complaintId, adminId }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default openIssue;
