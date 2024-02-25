const loginServer = async (data) => {
  try {
    const res = await fetch("http://localhost:8080/api/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const answer = await res.json();
    let statusNum = res.status;
    let token = answer.token;
    let user = answer.user;
    //returning the status number, token and user!!
    return [statusNum, token, user];
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
  }
};

module.exports = {
  loginServer,
};
