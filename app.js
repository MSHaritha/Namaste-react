/* 
<div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>

  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 tag from child1"),
    React.createElement("h1", {}, "h1 tag from child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag from child2"),
    React.createElement("h1", {}, "h1 tag from child2"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);