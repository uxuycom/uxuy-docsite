import React, { useRef, useCallback, useState } from "react";
const  CustomCard = props => {
    const { title, description, link, linkDownload } = props

    return (
        <article class="col col--6 margin-bottom--lg" style={{ padding: '0px', marginTop: "30px" }}>
          
            <a
                class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                href={link}
                // download={linkDownload}
                target="_blank"
            >
                <h2
                    class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                    title={title|| ""}
                >
                    📄️{title}
                </h2>
                <p
                    class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
                    title={description}
                >
                    {description}
                </p></a>
        </article>
    );
};

export default CustomCard;
