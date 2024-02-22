import logo from "../../assets/logoOrange.svg"

export default function Icon({className}) {
  return(
    <div>
        <a>
            <img className={className} src={logo} alt="Joe tech logo" />
        </a>
    </div>
  );
}
