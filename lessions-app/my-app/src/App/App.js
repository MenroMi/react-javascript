import { useState, useEffect } from "react";
import "../App/App.css";
class CurrencyReq {

    #apiBase = "http://api.nbp.pl/api/exchangerates/rates"
    #tableCurr = "A";

    #createObj = (arr) => {
        let value = arr.rates[0];

        return {
            "currency": arr.currency,
            "mid": value.mid,
            "date": value.effectiveDate
        }
    }
    #getReq = async (codeCurr) => {
        let res = await fetch(`${this.#apiBase}/${this.#tableCurr.toLowerCase()}/${codeCurr.toLowerCase()}`)
            .catch(error => error);

        if (typeof res === "undefined" || !res.ok || !res) {
            return res.toString();
        }
        return res.json();

    }

    getCurrency = async (code) => {
        let res = await this.#getReq(code);
        return typeof res !== "object" ? res : this.#createObj(res);
    }

}



const ConverterCurrency = ({ getMoney, changeType, type }) => {

    const [currency, setCurrency] = useState(0); // view of actual currency
    const [exchangeCurrency, setExchangeCurrency] = useState(0); // input value
    const [btnsGroup] = useState([ // array with btns
        { name: "EUR" },
        { name: "USD" },
        { name: "UAH" },
    ]);


    const setExchangeCurr = (e) => { // rerender state of input value
        let value = e.target.value;
        setExchangeCurrency(value);
    }

    useEffect(() => {
        async function getChange() {
            let res = await getMoney();
            if (!res) {
                return 0;
            } else {
                setCurrency(res * exchangeCurrency);
            }

        };

        getChange();

    }, [getMoney, exchangeCurrency])


    const btns = (code, id) => {
        return <button key={id} onClick={() => changeType(code)}>{code}</button>
    }


    return (
        <>
            <main className="background">
                <div className="view">
                    <input
                        onChange={setExchangeCurr}
                        type="text"
                        value={exchangeCurrency}
                        placeholder="How much?"
                    />
                    <div className="result-currency">{currency.toFixed(2)} PLN</div>
                    <p>{type ? type : 'Choose type'}</p>
                </div>
                <div className="btn-group">
                    {btnsGroup.map((item, i) => btns(item.name, i))}
                </div>
            </main>
        </>
    )

}

const App = () => {

    let curr = new CurrencyReq(); // instance
    const [typeCurr, setType] = useState(""); // type of currency

    const getMoney = async (code) => {

        if (code.length <= 0) {
            return;
        }

        try {
            let res = await curr.getCurrency(code);
            return res.mid;

        } catch {
            return "Please change type of currency"
        }

    }


    return (
        <>
            <ConverterCurrency
                getMoney={() => getMoney(typeCurr)}
                changeType={setType}
                type={typeCurr} />
        </>
    )
}



export default App;