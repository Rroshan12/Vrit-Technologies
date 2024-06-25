import { createGlobalStyle } from "styled-components";
import { antSidebar } from "./antd/antd.Sidebar";
import { antDataTable } from "./antd/antd.Datatable";


export const GlobalStyle = createGlobalStyle`
${antSidebar}
${antDataTable}


.ant-layout{
background:#EDF6FD;
}

.ant-btn-primary{

background:#082D4A !important;

}
.data-table-row{
color:red !important;
}


`