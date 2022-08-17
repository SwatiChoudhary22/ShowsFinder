import { FC, memo } from "react";
import { connect } from "react-redux";
import { AppState } from "../../Stores/store";

interface showsProps {}

const shows: FC<showsProps> = ({}) => {
  return <div></div>;
};

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {};

export default memo(connect(mapStateToProps, mapDispatchToProps)(shows));
