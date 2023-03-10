import * as React from "react";
import Banner from "../components/banner";
import Cta from "../components/cta";
import Address from "../components/Address";
import PhotoGallery from "../components/PhotoGallery";
import Hours from "../components/hours";
import Faqs from "../components/Faqs";
import PageLayout from "../components/PageLayout";
import BreadCrumbs from "../components/BreadCrumbs";
import StaticMap from "../components/StaticMap";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";


export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    filter: {
      entityTypes: ["location"]
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "neighborhood",
      "hours",
      "photoGallery",
      "slug",
      "paymentOptions",
      "geocodedCoordinate",
	    "yextDisplayCoordinate",
      "services",
      "covidMessaging",
      // "c_featuredFAQs.question",
      // "c_featuredFAQs.answer",
      // "dm_directoryParents.name",
      // "dm_directoryParents.slug",
      // "dm_directoryParents.meta.entityType",
      // "dm_directoryParents.c_addressRegionDisplayName",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({document}) => {
  return document.id.toString()+'.html';
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
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


 const Location: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {
  const {
    name,
    address,
    description,
    neighborhood,
    openTime,
    hours,
    mainPhone,
    photoGallery,
    geocodedCoordinate,
	  yextDisplayCoordinate,
    services,
    covidMessaging,
    c_featuredFAQs,
    dm_directoryParents,
    paymentOptions
  } = document;

  var formattedPhone = formatPhoneNumber(mainPhone);

  return (
    <>
      <PageLayout >
        <Banner text={name}>
        </Banner>
        <div className="centered-container">
          {/* <BreadCrumbs name={name} parents={dm_directoryParents} baseUrl={relativePrefixToRoot}></BreadCrumbs> */}
          <div className="section">
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <div className="address-phone space-y-5">
                  <h2 className="text-xl font-semibold mb-4">Address</h2>
                  <Address address={address}></Address>s
                  <div className="space-x-3">
                    <span>&#128222;</span>
                    <span>{formattedPhone}</span>
                  </div>
                </div>
                <Hours title="Hours" hours={hours}></Hours>
                <div className="description">
                  <div className="text-xl font-semibold mb-4">About {name} - {neighborhood}</div>
                  <p>{description}</p>
                </div>
              </div>
          </div>
          <div className="section">
            <PhotoGallery 
              photoGallery={photoGallery}
              height="300"
              width="450"
              ></PhotoGallery>
          </div>
          <div className="section">
            {/* <Faqs faqs={c_featuredFAQs}></Faqs> */}
          </div>
          <div className="section">
          <StaticMap
                  latitude={yextDisplayCoordinate.latitude}
                  longitude={yextDisplayCoordinate.longitude}
          />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;