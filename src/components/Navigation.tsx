import { Link } from "react-router-dom";

const navigation = [
    {
        title: "Home",
        pageURL: "/dashboard/home",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "To Add Calender",
        pageURL: "/dashboard/To_Add_Calender",
        Iconclass: "flaticon-381-networking"
    },
    {
        title: "Grade Book",
        pageURL: "/dashboard/Grade_book",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Account Book",
        pageURL: "/dashboard/Account_Book",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Progress",
        pageURL: "/dashboard/Progress",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Lecture Schedual",
        pageURL: "/dashboard/Lecture_Schedual",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Mail",
        pageURL: "/dashboard/Mail",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Notes",
        pageURL: "/dashboard/Notes",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "My Study Scheme",
        pageURL: "/dashboard/My Study Scheme",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "My Study Courses",
        pageURL: "/dashboard/My Study Courses",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Student Service",
        pageURL: "/dashboard/Student Service",
        Iconclass: "flaticon-381-television"
    },
    {
        title: "Admin",
        pageURL: "/dashboard/admin",
        Iconclass: "flaticon-381-television"
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
