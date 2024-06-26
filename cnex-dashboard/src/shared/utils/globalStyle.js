import { createGlobalStyle } from "styled-components";
import { antSidebar } from "./antd/antd.Sidebar";
import { antDataTable } from "./antd/antd.Datatable";
import { antSearchInput } from "./antd/antd.SearchInput";


export const GlobalStyle = createGlobalStyle`
${antSidebar}
${antDataTable}
${antSearchInput}
.ant-layout{
background:#EDF6FD;
}

.ant-btn-primary{

background:#082D4A !important;

}
.data-table-row{
color:rgba(60, 64, 67, 0.3) !important;
}

.ant-switch-checked{
.ant-switch-inner{
background:#03BE7A;
}
}
.ant-switch-inner{
background:#082D4A;
}

`