import style from "./SVGButton.module.scss";

type SVGButtonProps = {
  handleClick: () => void;
  name?: string;
  Svg: React.FunctionComponent<
    React.SVGAttributes<SVGElement> & { title: string }
  >;
  classToAdd?: string;
  svgTitle: string;
};

const SVGButton = ({
  handleClick,
  name,
  Svg,
  classToAdd = "classic",
  svgTitle,
}: SVGButtonProps) => {
  return (
    <button
      className={`${style[classToAdd]} ${style.container}`}
      onClick={handleClick}
    >
      <p>{name}</p>
      <Svg title={svgTitle} />
    </button>
  );
};

export default SVGButton;
