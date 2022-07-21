const Home = ()=> {
   return (
       <>
            <div>
                <span>My Courses <strong className="style-character">( Fall 2021 )</strong></span>
            </div>  
                <div className="row">
                <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <div className="style-of-text">
                                    <h4>CS403 - Database Management System</h4>
                                    <p>Computer Science/Information Technology</p>
                                    <span style={{color: 'rgb(204, 192, 192)'}}>3 Credit Hour(s)</span>
                                </div>
                            </div>
                           
                                <div className="card-body">
                                    <img src="/p.jpeg"></img>
                                    <p>Dr. Sameer Ali</p>
                                </div>
                            <div className="card-footer d-sm-flex justify-content-between align-items-center">
                                <div className="design">
                                        <img src="/ass.png"></img>
                                        <p>Assignments</p>
                                    </div>
                                    <div className="gdb" >
                                        <img src="/gdb.png"></img>
                                        <p>GDB</p>
                                    </div>
                                    <div className="quiz">
                                        <img src="/quiz.png"></img>
                                        <p>Quiz</p>
                                    </div>
                                    <div className="ac">
                                        <img src="/ac.png"></img>
                                        <p>Activity</p>
                                    </div>
                                    <div className="announcement">
                                        <img src="/announcement.png"></img>
                                        <p>Anouncement</p>
                                    </div>  
                            </div>    
                        </div>
                    </div>      
                </div>
        </>
    );
}

export default Home;
