import React, { useContext } from "react";
import { Breadcrumb } from "react-bootstrap";
import { LandingContext } from "../../App";
import styled from "styled-components";
const StyledIntegration = styled.div`
  float: left;
  width: calc(50%-1.5em);
  padding: 1.5em;
`;
const StyledImage = styled.img`
  float: left;
`;
const StyledIntegrationBody = styled.div`
  overflow: auto;
  margin-left: 1.5em;
  align-content: center;
  padding: 1em;
`;

const Integration = (props) => {
  const data = useContext(LandingContext);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/home">Главная</Breadcrumb.Item>
        <Breadcrumb.Item href="/#services">Услуги</Breadcrumb.Item>
        <Breadcrumb.Item href="/services/integration" active>
          {" "}
          Архитектура интеграции бизнеса
        </Breadcrumb.Item>
      </Breadcrumb>

      <StyledIntegration className="integration">
        <StyledImage
          className="integration-image"
          src="/img/integration/dataintegr.jpeg"
          width="300"
          height="224"
        />
        <StyledIntegrationBody className="integration-body">
          <p>
            {" "}
            Laboris sunt elit sunt dolor anim excepteur id anim voluptate. Quis
            Lorem excepteur labore tempor esse culpa eiusmod consectetur ea
            minim commodo nisi aliquip. Laboris cillum ullamco eiusmod eiusmod
            eu exercitation sint ad.Data integration uses both technical and
            business processes to merge data from different sources, with the
            goal of accessing useful and valuable information, efficiently. A
            well-thought-out data integration solution can deliver trusted data
            from a variety sources. Data integration is gaining ever more
            traction within the business due to the exploding volume of data and
            the need to share existing data. It encourages collaboration between
            both internal and external users and makes the data more
            comprehensive. Without unified data, creating a single report will
            require logging into multiple accounts, accessing data from native
            apps, reformatting and cleansing data — and that’s before the
            analysis can actually start.
          </p>
        </StyledIntegrationBody>
      </StyledIntegration>
    </div>
  );
};

export default Integration;
