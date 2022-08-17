import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { Show } from "../../models";
import { showsFetchTypesAction } from "../../Stores/action";
import { showsTypesSelector } from "../../Stores/selectors";
import { AppState } from "../../Stores/store";

interface ShowsListProps {
  shows: Show[];
  fetchShows: () => void;
}

const ShowsList: FC<ShowsListProps> = ({ shows, fetchShows }) => {
  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div>
      {shows.map((show) => (
        <div>{show.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  shows: showsTypesSelector(state),
});

const mapDispatchToProps = {
  fetchShows: showsFetchTypesAction,
};

export default memo(connect(mapStateToProps, mapDispatchToProps)(ShowsList));
