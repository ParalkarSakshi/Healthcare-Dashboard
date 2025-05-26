import Header from './Header'
import ActivityChart from "./ActivityChart";
import "./HumanBodyCard.css";

const HumanBodyCard = () => {
  return (
  <>
    <section className="human-body-section">
      <Header />

    <div className="body-card">
      <div className="human-image">
        <img src="/assests/human-body.webp" alt="Anatomy" className="body-image" />
        <div className="highlight-box heart">❤️ Healthy Heart</div>
        <div className="highlight-box leg">🦵 Healthy Leg</div>
      </div>
      
      <div className="human-organs">
        <div className="organ">
          <p className="organ-name"><span>🫁</span> Lungs</p>
          <p className='date'>Ends on: 26 Oct 2021</p>
          <div className='bar'>
            <div className='inner-bar bar-1'></div>
          </div>
        </div>
        <div className="organ">
          <p className="organ-name"><span>🦷</span> Teeth</p>
          <p className='date'>Next: 2 Nov 2021</p>
          <div className='bar'>
            <div className='inner-bar bar-2'></div>
          </div>
        </div>
        <div className="organ">
          <p className="organ-name"><span>🦴</span> Bone</p>
          <p className='date'>Due: 30 Dec 2021</p>
          <div className='bar'>
            <div className='inner-bar bar-3'></div>
          </div>
        </div>
      </div>
    </div>

    <ActivityChart />
    </section>
  </>
  );
};

export default HumanBodyCard;
