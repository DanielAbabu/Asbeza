import "./footer.css";
import { LuSendHorizonal } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="left-footer">
          <h1>Asbeza</h1>
          <p>
            Our job is to bring you fresh and delicious ingrediants and with
            fast delivery
          </p>
        </div>

        <div className="right-footer">
          <h5>Contact us</h5>
          <div className="footer-input">
            <input type="text" placeholder="write us your thoughts" />
            <span>
              <LuSendHorizonal />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
