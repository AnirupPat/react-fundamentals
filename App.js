const heading1 = React.createElement("h1", { id: "heading1" }, "I'm a h1 tag");
const heading2 = React.createElement("h2", { id: "heading2" }, "I'm a h2 tag");
const child = React.createElement("div", {}, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
