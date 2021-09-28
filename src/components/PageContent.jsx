import {  Switch, Route } from "react-router-dom";
import Clocks from "../page/Clocks";
import CurrencyRate from "../page/CurrencyRate";
import HomePage from "../page/HomePage";
import MakeTextStraigt from "../page/MakeTextStraigt";

export default function PageContent() {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact> 
          <HomePage />
        </Route>
        <Route path="/straight_text">
          <MakeTextStraigt />
        </Route>
        <Route path="/clocks">
          <Clocks />
        </Route>
        <Route path="/exchange">
          <CurrencyRate />
        </Route>

      </Switch>
    </main>
  );
}
