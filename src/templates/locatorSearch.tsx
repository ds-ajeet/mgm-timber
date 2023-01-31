import * as React from "react";
import "../index.css";
import { GetPath, Template, TemplateProps, TemplateRenderProps, TemplateConfig, GetHeadConfig,
  HeadConfig } from "@yext/pages";
import { SearchHeadlessProvider, useSearchActions } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {  AnswerExperienceConfig  } from "../config/globalConfig";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

export const config: TemplateConfig = {
  stream: {
    $id: "locator",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name",
    "c_mgmTimberLogo",
    "c_headerLinks",
    "c_footerDescription",
    "c_socialIcons",
    "c_customer_Services",
    "c_aboutMgm"

    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["globleData"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};
export const getPath: GetPath<TemplateProps> = () => {
  return `/index.html`;
};


// export const config: TemplateConfig = {
//   stream: {
//     $id: "locatorSearch",
//     localization: {
//       locales: ["en_GB"],
//       primary: false,
//     },
//     filter: {},
//     fields: []
//   },
// };

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
    ],
  };
};

const locatorSearch: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {

const { _site } = document;

const providerOptions: google.maps.MapOptions = {
  disableDefaultUI: true
}

return (
    <>
    <PageLayout _site={_site}>     
  
        <SearchHeadlessProvider
            experienceKey={AnswerExperienceConfig.experienceKey}
            locale={AnswerExperienceConfig.locale}
            apiKey={AnswerExperienceConfig.apiKey}               
            verticalKey={AnswerExperienceConfig.verticalKey}
            experienceVersion={AnswerExperienceConfig.experienceVersion}
            sessionTrackingEnabled={AnswerExperienceConfig.sessionTrackingEnabled}  
            endpoints={AnswerExperienceConfig.endpoints}         
        >
           <SearchLayout/>           
        </SearchHeadlessProvider>  
       
        </PageLayout>
        
    </>
  );
};

export default locatorSearch;