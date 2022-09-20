import "./btn.css";

function Btn() {
    const txt = <span>Click me!</span>
    const btn = <button type="button" className="btn" >{txt}</button>;

    return btn;
}

export default Btn;