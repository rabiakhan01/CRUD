import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../utils/Layout";
import { Error } from "../../components/Shared";
import { isLoginUser } from "../../utils/utils";

const PageNotFound = () => {
    const navigate = useNavigate();

    const [isLoggedIn, setLoggedIn] = useState(isLoginUser);

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