import { Link } from "react-router-dom";
const Tabs = [
    {
        title: "Students",
        pageURL: "/dashboard/admin/students",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "Teachers",
        pageURL: "/dashboard/admin/teachers",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "Subjects",
        pageURL: "/dashboard/admin/subjects",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Quiz",
        pageURL: "/dashboard/admin/quiz",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Assignments",
        pageURL: "/dashboard/admin/assignments",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Announcements",
        pageURL: "/dashboard/admin/announcements",
        Iconclass: "flaticon-381-television"
    },
    
]
const Template = (props: any) => {
       

    return (
        <> 
            <div className="card">
                <div className="card-body">
                    <div className="custom-tab-1">
                        <ul className="nav nav-tabs">
                            {
                                Tabs.map((item, Key)=> {
                                    return (
                                        <li key={Key} className="nav-item">
                                            <Link className="nav-link" to={item.pageURL}>
                                                <i className={item.Iconclass}></i>
                                                <span className="cnav-text" style={{marginLeft: 10}}>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul> 
                    </div>
                    {props.children}
                </div>
            </div>
        </>
       
    )
}
export default Template;