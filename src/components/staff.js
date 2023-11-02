import { React, useState} from "react";
import staff from "./staff.module.css";
import Header from "../header";
import Background from "../background";

function Staff() {

    const [flip, setFlip] = useState(false);

    const flipCard = () => {
        setFlip(!flip);
        console.log(flip);
    }

    return (
        <div className={staff.container}>
            <Header/>
            <div className={staff.staff}>
                
                
                <div className={staff.staffCards}>

                    {/*Page Title*/}
                    <div className={staff.title}>
                        <h1>Meet Your Caretakers!</h1>
                    </div>

                    {/*whitespace div*/}
                    <div className={staff.whitespace}></div>


                    {/*Staff Cards*/}

                    {/*sidespace div*/}
                    <div className={staff.sidespaceOne}></div>

                    {/*sidespace div*/}
                    <div className={staff.sidespaceTwo}></div>

                    <div className={staff.picture} >
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Wallace.jpg"
                                alt="staffpic"/>
                            <h3>Wallace C. Baker MD</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Wade.jpg"
                                alt="staffpic"/>
                            <h3>Wade Christensen PA-C</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Becky.jpg"
                                alt="staffpic"/>
                            <h3>Becky Newby PA-C</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Josh.jpg"
                                alt="staffpic"/>
                            <h3>Josh Hanson PA-C</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/nopicG.jpg"
                                alt="staffpic"/>
                            <h3>Jessica Christensen NP</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Carol.jpg"
                                alt="staffpic"/>
                            <h3>Carol Parker CMA</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/Ashley.jpg"
                                alt="staffpic"/>
                            <h3>Ashley Roberts CMA</h3>
                        </div>
                        
                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/nopicO.jpg"
                                alt="staffpic"/>
                            <h3>Erin Clifford CMA<br/>Billing Manager</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>

                    </div>

                    <div className={staff.picture}>
                        <div className={staff.front} onClick={() => {flipCard();}}>
                            <img className={staff.staffPictures}
                                src="/images/staff/nopicG.jpg"
                                alt="staffpic"/>
                            <h3>Tina Rojas<br/>Front Desk Manager</h3>
                        </div>

                        <div className={staff.bio} onClick={() => {flipCard();}}> <p></p> </div>
                        
                    </div>
                </div>

            </div>
            <Background/>
        </div>
    );
}

export default Staff;