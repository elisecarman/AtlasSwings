import { useRef} from "react";
import '../App.css';
import { Row, Col, Image} from 'react-bootstrap'

import Section from "../components/Section";
import Callout from "../components/Callout";
import Navigation from "../components/Navigation";
import pinkguy from "../assets/portfolio/better-pink-guy.png";
import atlas from "../assets/portfolio/atlas.png"
import capture1 from "../assets/portfolio/capture1.png"
import capture2 from "../assets/portfolio/capture2.png"
import capture3 from "../assets/portfolio/capture3.png"
import capture4 from "../assets/portfolio/capture4.png"

function AtlasSwings() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const refs = [
        section1Ref,
        section2Ref,
        section3Ref,
        section4Ref,
    ]
    const titles = [
        "Intro",
        "Overview",
        "Game Design",
        "Learnings",
    ]

    return(
        <div>
            <Navigation refs={refs} titles={titles}/>
            <Section first={true} ref={section1Ref}>
                <Row>
                <Col xs={0} md={6}>
                    <Image style={{position: "absolute", width: "900px", marginTop: "50px", marginLeft: "00px", zIndex: 1}} src={pinkguy}></Image>
                </Col>
                <Col style={{zIndex: 4}}>
                <h1 className="title" style={{marginBottom: "3rem"}}>Atlas Swings</h1>
                <h2 >Winner of the 2023 geopipe game jam</h2>
                

                <Row>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                </Col>
                </Row>
                <Callout>
                    During the month of January 2023, I and other students from the Brown RISD Game Developers participated in a game jam hosted by geopipe. Participants were tasked with creating a Unity game using real NYC buildings, streets, and terrain. Geopipe graciously provided the customizable game-ready environments. $2500 was awarded to the best game overall, rated by gameplay, visuals, creativity, and use of the theme. 
                    Our game, Atlas Swings, earned top place!
                </Callout>
                <h2><a href="https://itch.io/jam/new-york-new-york/results" style={{marginBottom: "6rem"}}> checkout contest</a> </h2>
                <h2><a href="https://cindy-lithium.itch.io/atlas-swings" style={{marginBottom: "6rem"}}> checkout game</a></h2>
                </Col>
               
                </Row>
            </Section>
            <Section first={false} ref={section2Ref}>
                <h1>Overview</h1>
                <Row >
                    <Image style={{marginBottom: "3rem"}} src={atlas}></Image>
                    
                    <Row>
                    <h1><i>CLANGGG!!!</i></h1>
                    <div className="subtle" style={{marginBottom: "2rem"}}> 
                        <i>A thunderous thud rings through Rockefeller Square and New York City. Atlas, the statue who holds it all together, has lost the globe again. With a lamp post by his side, time for sad-dad-statue's favorite Sunday morning activity: golfing the globe back to its place... and he better move fast before the city awakes again! </i>

                        <div>A Unity minigame hosted on itch.io - play <a href="https://cindy-lithium.itch.io/atlas-swings">here!</a></div>
                    </div>
                    

                    <Col>
                    <Callout>
                        I had the chance to collaborate with wonderful fellow Brown and RISD students on this project
                    </Callout>
                    <Callout>
                    Marshall Adeleye - <b>Art</b> <br/>
                    Zaineb Aljumayaat - <b>Co-producer, Art</b><br/>
                    Elise Carman - <b>Programming</b><br/>
                    Kate Cobey - <b>Programming</b><br/>
                    Yuemeng Dai - <b>Art</b><br/>
                    Beatty Fulmina- <b>Art</b><br/>
                    Li Huang - <b>Art</b><br/>
                    Julia Mei -<b>Music</b><br/>
                    Evan Mickelson - <b>Programming</b><br/>
                    Adam Ying - <b>Opening Cutscene</b><br/>
                    Nicole Zhu - <b>Art</b><br/>
                    </Callout>

                    </Col>

                    <Col>
                    <Callout>
                    
                    I primarily handled programming the play mechanics of the game alongside Evan Mickelson and Kate Cobey. We coded Atlas Swing in C# in Unity. Some of my personal contributions included:<br/><br/>
                    -The UI for the landing page, tutorial, settings screen <br/>
                    -Implementing music transitions for various stages of the game (intro, gameplay, win, loss)<br/>
                    -Implementing the win mechanic (creating the goal landing zone and triggering a win state on collide)<br/>
                    </Callout>
                    </Col>
                    </Row>
                    
                </Row>
            </Section>
            <Section first={false} ref={section3Ref}>
                <h1>Game design</h1>
                <Row>
                    <Col xs="auto" md={6}><Image src={capture1}></Image></Col>
                    <Col xs="auto" md={6}><Image src={capture2}></Image></Col>
                    <Col xs="auto" md={6}><Image src={capture3}></Image></Col>
                    <Col xs="auto" md={6}><Image src={capture4}></Image></Col>

                </Row>
                <Row>
                    
                   
                    <h2>Character Design</h2>
                    <Callout>
                        We decided <i>Atlas Swing</i> would be a light hearted game celebrating New York city in a cheeky way. We picked the Atlas statue in Rockefeller Center as our character, and thought to ourselves... what if Atlas royally messed up? 
                    </Callout>
                    <h2>Game mechanics</h2>
                    <Callout>
                        Since our group comprised many more designers than programmers, we opted for a simpler minigame:
                        <br></br>
                        1) The player advances through the map one gold swing at a time. They may charge their swing, resulting in a stronger, farther reaching swing
                        <br></br>
                        2) Mmmh, too many collisions with buildings, too hard, and boring... Let's make buildings blow up when the sphere is propelled too hard into them. This will be entertaining and clear obstacles a little.
                        <br></br>
                        3) The user must reach bring back the sphere to its original location (Rockefeller Square) within the allotted time!
                        <br></br>
                        4) Finding Rockefeller Square is too hard... let's add a map which the user can see in their top screen, and open full screen
                        <br></br>
                        5) TADA!
                    </Callout>
                </Row>
               
                
            </Section>
            <Section first={false} ref={section4Ref}>
                <h1>Learnings</h1>
                <h2>Diversity of skills</h2>
                <Callout >
                    I had the chance to work with an incredibly talented team with a plethora of skills. We notably had many talented artists with varied art styles; We decided to leverage this diversity. Instead of sticking to one art style, we employed as many as there were artists. You'll notice the art style in the tutorial, the landing page, the opening generic and even the game itself are quite different. We found the game richer for it, and enjoyed breaking industry norms.
                </Callout>
                <Row>
                    <Col xs="auto" md={6}><Image src={atlas}></Image><div><i>landing page</i></div></Col>
                    <Col xs="auto" md={6}><Image src={capture2}></Image><div><i>tutorial</i></div></Col>
                    <Col xs="auto" md={6}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        src="https://www.youtube.com/embed/JdG2WEJ6PHI"
                        title="YouTube video"
                        style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        }}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                    <div><i>opening generic</i></div>
                    </Col>
                </Row>
                <h2 >Collaboration</h2>
                <Callout>
                    We contended with a fairly open ended prompt, and choosing a winning concept then executing on it in a month was not small feat. As a group we listened intently to each other to find the idea which best employed our skills and sparked joy. Beyond Product designing, I also collaborated closely with the fellow programmers to report on the feasibility of ideas, take technical design decision, and coordinate division of labor.
                </Callout>
                <h2>Technical</h2>
                <Callout>
                    I deeply improved my knowledge of game development in Unity has well as coding in C#. I furthermore gained substantial Git expertise and learned to smoothly merge in new features and assets.
                </Callout>
                <Row>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                </svg>
                </Col>
                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                </svg>
                </Col>
                </Row>
                
            </Section>
            
        </div>
    )
    
}

export default AtlasSwings
