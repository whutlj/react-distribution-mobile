import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { vw } from '@/assets/js/utils';

export default class JoinTemplate extends React.Component {
  computedType(type) {}

  render() {
    const { source } = this.props;
    return (
      <Wrapper>
        <Content>
          <CoverBox>
            <Cover>
              <img className="cover-img" src={source.our_image} alt="" />
            </Cover>
          </CoverBox>
          <SourceBox>
            <Title>{/* <Type className={} /> */}</Title>
          </SourceBox>
        </Content>
      </Wrapper>
    );
  }
}

JoinTemplate.propTypes = {
  source: PropTypes.object.isRequired
};

// style
const Wrapper = styled.div`
  padding: ${vw('15px')};
  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${vw('99px')};
  height: ${vw('81px')};
`;

const Cover = styled.div`
  height: ${vw('79px')};
  width: ${(props) => (props.type === 'mini' ? vw('60px') : vw('99px'))};
  .cover-img {
    width: 100%;
    height: 100%;
  }
`;

const SourceBox = styled.div`
  flex: 1;
  background: #ccc;
  height: ${vw('81px')};
  padding-left: ${vw('15px')};
  color: #fff;
`;

const Title = styled.div`
  display: flex;
  color: #1a1a1a;
  font-size: 14px;
`;

const Type = styled.div`
  width: ${vw('30px')};
  height: ${vw('15px')};
  background-position: 0 0;
  background-size: 100% 100%;
  &.mh {
    background-image: url(${require('@/assets/img/mh.svg')});
  }
  &.xs {
    background-image: url(${require('@/assets/img/xs.svg')});
  }
  &.cx {
    background-image: url(${require('@/assets/img/cx.svg')});
  }
  &.kc {
    background-image: url(${require('@/assets/img/kc.svg')});
  }
`;
