import { JSX } from "solid-js";
import "./card.css";

type CardProps = {
  title: string;
  footer: string;
  center?: boolean;
  children?: JSX.Element;
};

function isSigned(str: string) {
  if (str.charAt(0) == "+") {
    return "green";
  } else if (str.charAt(0) == "-") {
    return "red";
  } else {
    return "";
  }
}

export function Card(props: CardProps) {
  return (
    <div class={"card" + (props.center ? " centered" : "")}>
      <div class="card-title">{props.title}</div>
      <div class="card-body">{props.children}</div>
      <div class={"card-footer " + isSigned(props.footer)}>{props.footer}</div>
    </div>
  );
}
