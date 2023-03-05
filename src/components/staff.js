import React from "react";
import staff from "./staff.module.css";
import Header from "../header";
import Background from "../background";

function Staff() {
    return (
        <div className={staff.container}>
            <Header/>
            <div className={staff.staff}>
                
                {/*Left side of background*/}
                <div className={staff.leftSide}>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Wallace C. Baker MD</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Wade Christensen PA-C</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Becky Newby PA-C</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Josh Hanson PA-C</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Jessica Christensen NP</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>
                </div>

                {/*Middle Title*/}
                <div className={staff.title}>
                    <h1>Staff Page</h1>
                </div>

                {/*Right side of background*/}
                <div className={staff.rightSide}>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Carol Parker CMA</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Ashley Roberts CMA</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Erin Clifford CMA<br/>Billing Manager</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>

                    <div className={staff.picture}>
                        <img className={staff.staffPictures}
                            src="/images/nopic.png"
                            alt="staffpic"/>
                        <h3>Tina Rojas<br/>Front Desk Manager</h3>
                        <div className={staff.bio}>
                            <p></p>
                        </div>
                    </div>
                </div>

            </div>
            <Background/>
        </div>
    );
}

export default Staff;