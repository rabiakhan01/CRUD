import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../utils/Layout";
import { Error } from "../../components/Shared";

const PageNotFound = () => {
    const navigate = useNavigate();
    const isLoginUser = () => {

        const getUser = JSON.parse(localStorage.getItem("loginUser"));
        if (getUser) {
            const user = getUser.find(user => user.isLogin === true);
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    const [isLoggedIn, setLoggedIn] = useState(isLoginUser);

    const [pageError, setpageError] = useState();

    const handelLogin = () => {
        navigate("/login")
    }
    const handelFeed = () => {
        navigate("/user-listing")
    }
    return (
        <Layout>
            {
                isLoggedIn
                    ?
                    <Error
                        onClick={handelLogin}
                    />
                    :
                    <Error
                        onClick={handelFeed}
                    />
            }
        </Layout>
    )

}

export default PageNotFound;