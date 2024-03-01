const deleteUser = async (token, id) => {
    try {
        const res = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "delete",
        headers: {
            authorization: token,
            "Content-Type": "application/json",
        },
    });
    return res.status;
    } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    return 404;
}
};
const updateUser = async (token, user) => {
    const id = user._id;
    console.log("hey");
    try {
        const res = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "put",
        headers: {
            authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return res.status;
    } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    return 404;
}
};
const CreatePost = async (token, post,id) => {
    console.log(id);
    try {
        const res = await fetch(`http://localhost:8080/api/users/${id}/posts`, {
        method: "post",
        headers: {
            authorization: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });
    return res.status;
    } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    return 404;
}
};

const deletePost = async (token, postId,userId) => {
    try {
        const res = await fetch(
          `http://localhost:8080/api/users/${userId}/posts/${postId}`,
          {
            method: "delete",
            headers: {
              authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
    return res.status;

    } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    return 404;
}
}
export { deleteUser, updateUser , CreatePost, deletePost};