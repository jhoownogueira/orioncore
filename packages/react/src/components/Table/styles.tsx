import styled from "styled-components";
import { colors, fonts } from "@orioncore/tokens";

interface RowTableBodyContainerProps {
  $hoverColor?: string;
}

interface TableBodyProps {
  $breakPointMobile?: string;
  $maxHeightMobile?: string;

  $breakPointTablet?: string;
  $maxHeightTablet?: string;

  $breakPointSm?: string;
  $maxHeightSm?: string;

  $breakPointMd?: string;
  $maxHeightMd?: string;

  $breakPointLg?: string;
  $maxHeightLg?: string;
}

export const TableRootContainer = styled.div`
  width: 100%;
`;

export const TableHeaderContainer = styled.div`
  width: 100%;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-family: ${fonts.default};
    thead {
      display: block;
      background: ${colors.neutral_100};
      border-radius: 8px 8px 0 0;
      color: ${colors.neutral_900};
      border: 1px solid ${colors.neutral_100};
      font-size: 0.875rem;
      border-bottom: 0;
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.5rem;
        th {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 0 0 1rem;
          button.th-flex {
            border: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.neutral_900};
            font-size: 0.875rem;
            font-weight: 700;
            background: transparent;
          }
        }
      }
    }
  }
`;

export const TableBodyContainer = styled.div<TableBodyProps>`
  width: 100%;
  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border-top: 1px solid ${colors.neutral_100};
    font-family: ${fonts.default};
    tbody {
      display: block;
      max-height: 700px;
      overflow-y: auto;
      padding-right: 0.5rem;
      tr {
        td {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 0 0 1rem;
        }
      }
    }
  }

  @media (max-width: ${(props) =>
      props.$breakPointLg ? props.$breakPointLg : "1536px"}) {
    table {
      tbody {
        max-height: ${(props) =>
          props.$maxHeightLg ? props.$maxHeightLg : "500px"};
      }
    }
  }

  @media (max-width: ${(props) =>
      props.$breakPointMd ? props.$breakPointMd : "1370px"}) {
    table {
      tbody {
        max-height: ${(props) =>
          props.$maxHeightMd ? props.$maxHeightMd : "328px"};
      }
    }
  }

  @media (max-width: ${(props) =>
      props.$breakPointSm ? props.$breakPointSm : "1025px"}) {
    table {
      tbody {
        max-height: ${(props) =>
          props.$maxHeightSm ? props.$maxHeightSm : "328px"};
      }
    }
  }

  @media (max-width: ${(props) =>
      props.$breakPointTablet ? props.$breakPointTablet : "800px"}) {
    table {
      tbody {
        max-height: ${(props) =>
          props.$maxHeightTablet ? props.$maxHeightTablet : "350px"};
      }
    }
  }

  @media (max-width: ${(props) =>
      props.$breakPointMobile ? props.$breakPointMobile : "480px"}) {
    table {
      tbody {
        max-height: ${(props) =>
          props.$maxHeightMobile ? props.$maxHeightMobile : "328px"};
      }
    }
  }
`;

export const TableFooterContainer = styled.div`
  width: 100%;
  height: 16px;
  background: ${colors.neutral_50};
  border-radius: 0 0 8px 8px;
`;

export const RowTableBodyContainer = styled.tr<RowTableBodyContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 2.5rem;
  background: ${colors.flash_white};
  border-bottom: 1px solid ${colors.neutral_100};
  color: ${colors.neutral_900};
  font-size: 0.875rem;
  cursor: pointer;
  height: 3.5rem;
  &:hover {
    background: ${(props) =>
      props.$hoverColor ? props.$hoverColor : colors.neutral_100};
    transition: all 0.2s;
  }
`;
