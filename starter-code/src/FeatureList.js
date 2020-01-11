import React from "react";
import Feature from './Feature';

const FeatureList = () => (
  <div className="container pt-4 pb-4">
    <div className="card-deck">
      <Feature img="/images/icon1.png" title="Declarative" description="React makes it painless to create interactiveUIs"/>

      <Feature img="/images/icon2.png" title="Components" description="Build encapsulated components that manage their state"/>

      <Feature img="/images/icon3.png" title="Single-Way" description="A set of inmutables values are passed o the component's"/>

      <Feature img="/images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern rowsers"/>
      </div>
  </div>
)

export default FeatureList;