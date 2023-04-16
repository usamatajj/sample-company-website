import { GREY } from './../../constants/index';
import { Card } from 'antd';
import styled from 'styled-components';

export const ServiceCardContainer = styled(Card)`
  gap: 20px;
  max-width: 28%;
  border-radius: 7px;
  & .ant-card-body {
    display: grid;
    gap: 20px;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
export const CardTitle = styled.h2`
  display: inline-block;
  font-size: 1.2rem;
  height: 30px;
`;
export const CardIcon = styled.div``;

export const CardDescription = styled.p`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 1rem;
  color: ${GREY};
  height: 50px;
`;

export const CardFooter = styled.div`
  height: 10px;
`;
