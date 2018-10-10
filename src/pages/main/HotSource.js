import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { loadingOpen, loadingClose } from '@/assets/js/utils';
import LoadingComponent from '@/components/common/LoadingComponent';
const JoinTemplate = Loadable({
  loader: () => import('@/components/common/JoinTemplate'),
  loading: LoadingComponent
});
export default class HotSource extends React.Component {
  componentDidMount() {
    if (this.props.loading) {
      loadingOpen();
    } else {
      loadingClose();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading) {
      if (nextProps.loading) {
        loadingOpen();
      } else {
        loadingClose();
      }
    }
  }

  render() {
    const { loading, sourceList } = this.props;
    if (loading) return null;
    if (!loading && sourceList.length === 0) {
      return <div>空状态</div>;
    } else {
      return sourceList.map((source, index) => <JoinTemplate key={index} source={source} />);
    }
  }
}

HotSource.propTypes = {
  loading: PropTypes.bool.isRequired,
  sourceList: PropTypes.array.isRequired
};
