import { connect } from 'react-redux';

import Dashboard, { DispatchProps, StateProps } from 'components/dashboard/Dashboard';
import { getInitialCoordinates, getNextGeneration } from 'actions/dashboardAction';

import { StateType } from 'types/ReducersType';

const mapDispatchToProps: DispatchProps = {
  getInitialCoordinates,
  getNextGeneration,
};

const mapStateToProps = (state: StateType): StateProps => ({
  coordData: state.dashboardState.coordData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
