import { Link } from "react-router-dom";

const navigation = [
    {
        title: "Students",
        pageURL: "/dashboard/students",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "Teachers",
        pageURL: "/dashboard/Teachers",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "Subjects",
        pageURL: "/dashboard/Subjects",
        Iconclass: "flaticon-381-networking"
    },

]

const Navigation = ()=> (
    <div className="deznav" style={{paddingTop: 90}}>
        <div className="deznav-scroll" style={{overflow: 'auto'}}>
            <ul className="metismenu" id="menu">
                    {
                        navigation.map((item, Key)=> {
                            return (
                                <li  key={Key}>
                                    <Link className="has-arrow ai-icon" to={item.pageURL}>
                                        <i className={item.Iconclass}></i>
                                        <span className="cnav-text">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }                 
            </ul>
        </div>
    </div>
)

export default Navigation;
