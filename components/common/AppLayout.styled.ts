import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

export const LayOutWrapper = styled.div`
  padding: 16px 15px 16px 16px;
`;

export const LayoutHeader = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const AppImage = styled(Image)`
  object-fit: contain;
  border-radius: 10px;
  width: 28px;
  height: 28px;
`;

export const AppNameContainer = styled.div``;

export const AppNameTitle = styled.span`
  font-family: SpoqaHanSansNeo;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #151515;
`;

export const NavContainer = styled.div`
  margin-top: 12px;
  height: 36px;
  justify-content: row;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 2px solid #e6e6e6;
`;

const ActiveNavStyles = {
  color: '#151515',
  '&::after': {
    content: '""',
    width: '100%',
    height: '2px',
    backgroundColor: '#151515',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
  },
};

export interface Prop {
  active: string;
}

export const NavItem = styled(Link)<Prop>`
  cursor: pointer;
  width: auto;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  border: solid 1px rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  color: '#6e6e6e';
  ${({ active }) => (active === 'true' ? ActiveNavStyles : {})};
`;
