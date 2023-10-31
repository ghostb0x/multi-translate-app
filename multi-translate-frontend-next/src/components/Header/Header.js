import React from 'react';
import styled from 'styled-components';
import SectionName from '../SectionName';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Wrapper>
      <LeftNav href="www.ghostb0x.dev/projects">
        <Logo
          src="/assets/images/ghostbox logo transparent bg.png"
          alt="ghostbox.dev - go to homepage"
          height={40}
          width={40}
          priority={true}
        />
      </LeftNav>
      <SectionName type="h1">
        Multi-translate: Powered by Google Translate
      </SectionName>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-bottom: 10px;
  border-bottom: 1px solid;
  padding: 8px;

  display: flex;
  justify-content: space-around;
`;

const Logo = styled(Image)`
  width: 40px;
  border: 2px dotted black;
`;

const LeftNav = styled(Link)`
  margin-right: 10px;
  display: flex;
  align-items: center;
  &:hover {
    filter: invert(58%) sepia(1) saturate(20) hue-rotate(216deg)
      brightness(0.62);
  }
`;

export default Header;
