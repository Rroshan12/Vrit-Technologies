import styled, { css } from "styled-components";

export const antSidebar = css`
  .demo-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin: 5px;
    }
  }

  .ant-menu-submenu-title {
    padding-left: 10px !important;
    color: #86888a !important;
    gap: 6px !important;
    &:hover {
      background: #fff !important;
    }
  }

  .ant-menu-item-selected {
    background: #082d4a !important;
    .ant-menu-item-icon {
      color: #fff !important;
    }
    .ant-menu-title-content {
      color: #fff !important;
    }
  }

  .ant-menu-item {
    padding-left: 10px !important;
    color: #86888a !important;
    gap: 6px !important;
    margin-top: 11px !important;
    margin-left: 0px;
    border-radius: 0px !important;

    &:hover {
      background: #fff !important;

      .ant-menu-item-icon {
        color: #86888a !important;
      }
      .ant-menu-title-content {
        color: #86888a !important;
      }
    }
  }
  .ant-layout-header {
    background: #fff;

    .ant-menu {
      background: #fff;
    }
  }
`;
