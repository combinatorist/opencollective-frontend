import styled from 'styled-components';
import { CustomScrollbarCSS } from '../../lib/styled-components-shared-styles';

/** An horizontally scrollable container to display contribute cards cards */
const ContributeCardsContainer = styled.div`
  display: flex;
  padding: 16px 0;
  overflow-x: auto;
  scroll-behavior: smooth;

  ${CustomScrollbarCSS}

  /** Respect left margin / center cards on widescreens */
  @media (min-width: 1440px) {
    padding-left: calc((100% - 1440px) / 2 - 32px);
  }
`;

/** @component */
export default ContributeCardsContainer;
