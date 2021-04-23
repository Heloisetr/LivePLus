import React, { PureComponent } from 'react';

import Logo from 'assets/logo.png';

import 'styles/dashboardHeader.css';

class DashboardHeader extends PureComponent {
  render() {
    return (
      <div className="dashboardHeader">
        <img className="dashboardHeaderLogo" src={Logo} alt="logo" />
      </div>
    );
  }
}

export default DashboardHeader;