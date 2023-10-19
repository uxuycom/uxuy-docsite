import React, { useRef, useCallback, useState } from "react";
const  CustomCard = props => {
    const { title, description, link } = props

    return (
        <article class="col col--6 margin-bottom--lg" style={{ padding: '0px', marginTop: "30px" }}>
          
            <a
                class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                href={link}
            >
                <h2
                    class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                    title="Logo & Download branding assets"
                >
                    📄️{title}
                </h2>
                <p
                    class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                    title="Guidlines and downloadable assets like the UXUY logo"
                >
                    {description}
                </p></a>
        </article>
    );
};

export default CustomCard;
