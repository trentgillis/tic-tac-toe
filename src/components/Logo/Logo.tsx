import styled from 'styled-components';

import logo from '@/assets/logo.svg';

const Layout = styled.div`
  height: 32px;
`;

export function Logo() {
  return (
    <Layout>
      <img src={logo} />
    </Layout>
  );
}
