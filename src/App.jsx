import {
  Cloud,
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";

import { Riot } from "./components/Riot";

import baffle from "baffle";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: 'wallrideheadshotsrespwanmilitia',
      speed: "100",
    });
    target.start();
    target.reveal(1000, 1000);
  });

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />
      <ScrollControls pages={6} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <Riot scale={0.3} position={[0, -2.8, 0]} />

        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />
        <Scroll>
          {/* Canvas contents in here will scroll along */}
          <Cloud size={2} color={"#FFA559"} scale={[10, 10, 10]} />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          {/* DOM contents in here will scroll along */}
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            TITANFALL
          </h1>

          <div
            className="row"
            style={{ position: "absolute", top: `132vh`, left: `80px` }}
          >
            <h2>Join the fight.</h2>
            <p style={{ width: "45ch" }}>
              In Titanfall, players have the opportunity to become heroes on the
              battlefield. As a pilot, you will have access to advanced weapons,
              unique abilities, and powerful Titans, all of which can help you
              turn the tide of battle in your favor. Whether you prefer
              fast-paced action or tactical gameplay, Titanfall has something
              for everyone. So join the fight, hone your skills, and become a
              hero in the world of Titanfall.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `160px`, width: "540px" }}
            >
              <h2>Discover the weapons.</h2>
              <p style={{ width: "45ch" }}>
                One of the most exciting aspects of Titanfall is the wide
                variety of weapons available to players. From assault rifles and
                sniper rifles to shotguns and grenade launchers, there is a
                weapon to suit every playstyle. Each weapon has its own unique
                strengths and weaknesses, and mastering them requires skill and
                practice. In addition to traditional weapons, players also have
                access to special abilities like cloak and stim, which can give
                them an edge in combat.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Futuristic shooter game
          </h2>

          <h2
            style={{
              position: "absolute",
              top: "450vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Mechs, guns, action
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Play now
          </button>
        </Scroll>
      </ScrollControls>
    </>
  );
}
