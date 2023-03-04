import React from "react";
import app from "./app.module.css";
import Header from "./header";

function App() {
    return (
            <div className={app.container}>
                <Header/>
                <div className={app.app}>
                    <div className={app.title}>
                        <h1>Welcome</h1>
                    </div>

                    <div className={app.pheader}>
                        <h2>Baker Family Practice</h2>
                    </div>

                    <div className={app.practiceInfo}>
                        <p>
                            Baker Family Practice is a family medicine practice in in Idaho Falls, Idaho, providing primary health care services to people of all ages. Started in August of 1996 by Wallace Coleman Baker, MD, Baker Family Practice strives to be a warm and inviting place for families to receive quality medical care. We believe that good relationships between a provider and a patient builds trust and results in better health outcomes. We strive to get to know you and your family so that we can provide that kind of personal and individualized care.    
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default App;