import React from "react";

// components
import Header from "components/App/Header";
import Footer from "components/App/Footer";
import Content from "components/App/Content";
import Filter from "components/Filter";

import * as EA from "./styles";

const App = () => {
  return (
    <EA.Container>
      <Header />

      <Content>
        <EA.ContentHeader>
          <EA.ContentTitle>Game Directory</EA.ContentTitle>
          <Filter />
        </EA.ContentHeader>
      </Content>

      <Footer />
    </EA.Container>
  );
};

export default App;
