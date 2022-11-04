import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";


const Main = () => {
  const KEY = "TSzausRCzRJkUe483fBOyLiOzW8Mipbn";
  const [valueIn, setValueIn] = useState<string>("");
  const [valueOut, setValueOut] = useState<string>("");
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [currencyIn, setCurrencyIn] = useState<string>('');
  const [currencyOut, setCurrencyOut] = useState<string>('');


  useEffect(() => {
    const cur: string[] = [];
    Object.keys(currencies).forEach(key => {cur.push(key)});
    setCurrencies(cur);
  }, [])

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", KEY);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const fetchData = async () => {
        const req = await  fetch(
                  `https://api.apilayer.com/currency_data/list`,
                  requestOptions
                )
        const res = await req.json();
        const cur: string[] = [];
        Object.keys(res.currencies).forEach(key => {cur.push(key + ' ' + res.currencies[key])});
        setCurrencies(cur);
    }
    fetchData();
   }, []);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", KEY);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    const fetchData = async () => {
        const req = await  fetch(
                  `https://api.apilayer.com/currency_data/convert?to=${currencyOut}&from=${currencyIn}&amount=${valueIn}`,
                  requestOptions
                )
        const res = await req.json();
        setValueOut(res.result);
    
    }
    fetchData();

   }, [valueIn, currencyIn,currencyOut]);

  const onChangeIn = (e: React.FormEvent<HTMLInputElement>) => {
    setValueIn(e.currentTarget.value);
  };

  return (
    <div className="main_wrapper">
      <div className="main__input_wrapper">
        <Input value={valueIn} onChange={onChangeIn} />
        <Select options={currencies} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrencyIn(e.currentTarget.value.split(' ')[0])}/>
      </div>
      <div className="main__input_wrapper">
        <div className="main__output">{valueOut}</div>
        <Select options={currencies} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrencyOut(e.currentTarget.value.split(' ')[0])}/>
      </div>
    </div>
  );
};

export default Main;
