import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Home.scss"
import { NavBar } from "../../components/NavBar/NavBar";
import { DashBoard } from "../../components/DashBoard/DashBoard";

export const Home = () => {
    const {token} = useSelector((state) => state);
    const navigate = useNavigate()

    useEffect(() => {
        console.log(token.token);
        if(!token.token) {
            navigate("/login")
        }
    }, [token.token]);
    return <>
        <div className="site-wrapper">
            <NavBar/>

            <div className="site-inner">
            <Routes>
                <Route path="/" element={<DashBoard/>}/>
            </Routes>
            </div>
        </div>
    </>
}
