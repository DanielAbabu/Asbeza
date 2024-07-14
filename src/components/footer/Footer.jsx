import "./footer.css";

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
          <h3>Contact us</h3>
          <input type="text" placeholder="write us your thoughts" />
        </div>
      </div>
    </div>
  );
}
