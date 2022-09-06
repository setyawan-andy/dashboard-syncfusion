import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MainContainer,
  TooltipContainer,
  ButtonSetting,
  SidebarActive,
  SidebarNotActive,
  MenuContainer,
  MenuItem,
} from "./fragments";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import "./App.css";

function App() {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <MainContainer>
        <TooltipContainer>
          <TooltipComponent content="Settings" position="Top">
            <ButtonSetting>
              <FiSettings />
            </ButtonSetting>
          </TooltipComponent>
        </TooltipContainer>
        {/* sidebar */}
        {activeMenu ? (
          <SidebarActive>Sidebar</SidebarActive>
        ) : (
          <SidebarNotActive>Sidebar</SidebarNotActive>
        )}
        <MenuContainer activeMenu={activeMenu}>
          <MenuItem></MenuItem>
        </MenuContainer>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element="Ecommerce" />
          <Route path="/ecommerce" element="Ecommerce" />

          {/* pages */}
          <Route path="/orders" element="Orders" />
          <Route path="/employees" element="employees" />
          <Route path="/customers" element="customers" />

          {/* Apps */}
          <Route path="/kanban" element="kanban" />
          <Route path="/editor" element="editor" />
          <Route path="/calendar" element="calendar" />
          <Route path="/color-picker" element="color-picker" />

          {/* Carts */}
          <Route path="/line" element="line" />
          <Route path="/area" element="area" />
          <Route path="/bar" element="bar" />
          <Route path="/pie" element="pie" />
          <Route path="/financial" element="financial" />
          <Route path="/color-map" element="color-map" />
          <Route path="/pyramid" element="pyramid" />
          <Route path="/stacked" element="stacked" />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
