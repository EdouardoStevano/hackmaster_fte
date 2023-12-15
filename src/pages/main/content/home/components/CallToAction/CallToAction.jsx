import Spline from "@splinetool/react-spline";
import "./callToAction.scss";
export default function CallToAction() {
  return (
    <div className="perspective-bloc">
      <div className="Title">
        <div>
          <h1>
            Pourquoi se limite a une seule ville alors qu'on a un vaste monde
            innover
          </h1>
          <p className="p1">Le monde du futur s'offre a vous</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <button>Explorer</button>
        </div>
      </div>
      <div className="containner">
        <Spline scene="https://prod.spline.design/iI0hCG6IoRCZz1-K/scene.splinecode" />
      </div>
    </div>
  );
}
