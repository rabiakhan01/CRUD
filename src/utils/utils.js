// check if user exists or not

const isLoginUser = () => {

    const getUser = JSON.parse(localStorage.getItem("loginUser"));
    if (getUser) {
        const user = getUser.find(user => user.isLogin === true);
        if (user) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }

}

// get the user from the local host
const getUser = () => {

    const user = localStorage.getItem("loginUser");
    if (user) {
        return JSON.parse(user);
    }
    else {
        return [];
    }
}



export {
    isLoginUser,
    getUser,

}
