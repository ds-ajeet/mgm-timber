// import * as React from "react";



// const Footer = () => {
//   return (
//     <footer style={{ background: "white", height: "400px" }} className="footer1">
//     <section style={{ height: "5px" }} className="footer-panel">

//         <div className="container">
//           <div className="row o-footer__menu">
//             <div style={{ padding: "15px" }} className="grid grid-cols-5 gap-x-10 gap-y-10">

//               <div className="col-12@xs col-2@lg u-mar-t-large u-font-ta-c">
//                 <div className="row u-bor-b@lg-down u-pad-b-medium">
//                   <div className="u-mar-t-medium col-12@lg col-6@xs">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
//                       <g fill="#111" fill-rule="evenodd">
//                         <path d="M6.999 6a1.001 1.001 0 1 0 1 1c0-.551-.45-1-1-1m0 4c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3"></path>
//                         <path d="M6.999 2c-2.757 0-5 2.243-5 5 0 2.591 3.107 7.583 5 10.291 1.892-2.709 5-7.702 5-10.291 0-2.757-2.243-5-5-5m0 18.667c-2.36-3.147-7-9.731-7-13.667 0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.936-4.641 10.521-7 13.667"></path>
//                       </g>
//                     </svg>

//                     <div className="u-mar-t-small o-footer-menu-divider u-pad-b-medium">
//                       <a className="o-footer__container--enabler u-font-wb u-color-dgrey u-color-dgrey-hover u-hover-underline" href="#">Store Finder</a>
//                     </div>
//                   </div><br />
//                   <div className="u-pad-t-medium col-12@lg col-6@xs">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                       <g fill="#111" fill-rule="evenodd">
//                         <path d="M2 9v9h3v2l2.667-2H15V9H2zm1 15v-4H2c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h13c1.103 0 2 .897 2 2v9c0 1.103-.897 2-2 2H8.333L3 24zM21 9h-2V6h1c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2h-2c0-2.206 1.794-4 4-4s4 1.794 4 4a4.01 4.01 0 0 1-3 3.874V9zM21 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
//                       </g>
//                     </svg>
//                     <div className="u-mar-t-small">
//                       <a className="o-footer__container--enabler u-font-wb u-color-dgrey u-color-dgrey-hover u-hover-underline" href="#">FAQs</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>



//               <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
//                 <ul>
//                   <li className="widget-container widget_nav_menu">
//                     <h2 style={{ color: "#f5821f" }} className="title-widget">Customer Services</h2>
//                     <ul style={{ color: "black" }} className="menu_footer">
//                       <li><a href="#">Track My Order</a></li>
//                       <li><a href="#">Here to Help</a></li>
//                       <li><a href="#">Gift Cards</a></li>
//                       <li><a href="#">Delivery</a></li>
//                       <li><a href="#">Returns</a></li>
//                       <li><a href="#" target="_blank">Product Recall</a></li>
//                       <li><a href="#">Contact Us</a></li>
//                       <li><a href="#">FAQs</a></li>

//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
//                 <ul>
//                   <li className="widget-container widget_nav_menu">
//                     <h2 style={{ color: "#f5821f" }} className="title-widget">About Matalan</h2>
//                     <ul style={{ color: "black" }} className="menu_footer">
//                       <li><a href="#">About</a></li>
//                       <li><a href="#">Jobs</a></li>
//                       <li><a href="#">Modern Slavery Act</a></li>
//                       <li><a href="#">Corporate Publications</a></li>
//                       <li><a href="#">Charity</a></li>
//                       <li><a href="#" >ESG</a></li>
//                       <li><a href="#">Others</a></li>

//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h2 style={{ color: "#f5821f" }} className="title-widget">Our Websites</h2>
//                 <ul style={{ color: "black" }} className="menu_footer">

//                   <li><a href="#">Cookies</a></li>
//                   <li><a href="#">Privacy Policy</a></li>
//                   <li><a href="#">Terms & Conditions</a></li>
//                   <li><a href="#">Acceptable Use Policy</a></li>
//                   <li><a href="#" >Sitemap</a></li>

//                 </ul>

//               </div>
//               <div>
//                 <div className="col-12@xs col-3@lg u-mar-t-large o-footer__menu--social">
//                   <div className="row o-footer__app-store-container u-pad-b-medium">
//                     <div className="col-12@xs o-footer__app-store-container__header-wrap u-mar-b-small">
//                       <h4 className="u-font-wb u-font-ta-c@md-down">Download Our App</h4>
//                     </div><br />
//                     <div className="grid grid-cols-2 gap-x-10 gap-y-10">
//                       <div className="col-12@xs o-footer__app-store-container__icon-wrap u-dis-flex u-jus-cent@md-down u-font-size-0">
//                         <a href="#" target="blank" className="u-mar-r-medium">
//                           <svg width="118px" height="40px" preserveAspectRatio="xMinYMin meet" viewBox="0 0 118 40" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M108.604.4a91.322 91.322 0 011.973.014c.64.007 1.278.064 1.908.171.616.107 1.211.304 1.766.588a6.021 6.021 0 012.586 2.622c.28.564.473 1.167.574 1.792.106.642.166 1.291.178 1.942.004.305.004.61.004.922.007.36.007.721.007 1.085h0v20.928c0 .367 0 .725-.007 1.094 0 .309 0 .608-.004.915a13.338 13.338 0 01-.178 1.945 6.272 6.272 0 01-.572 1.787 6.022 6.022 0 01-1.095 1.516c-.436.446-.94.819-1.49 1.102a6.237 6.237 0 01-1.767.592c-.631.106-1.27.164-1.915.172-.298.007-.602.011-.902.011-.354.002-.713.002-1.066.002h0H9.402c-.36 0-.716 0-1.079-.003-.3 0-.596-.003-.901-.01a12.688 12.688 0 01-1.913-.171 6.16 6.16 0 01-1.76-.593 5.799 5.799 0 01-1.496-1.105c-.44-.44-.807-.95-1.087-1.51a6.293 6.293 0 01-.58-1.792 12.82 12.82 0 01-.171-1.947c-.006-.206-.009-.407-.01-.606h0L.4 8.45c.006-.507.008-.71.015-.922.007-.65.065-1.3.171-1.942a6.216 6.216 0 01.58-1.79A5.973 5.973 0 013.75 1.174 6.097 6.097 0 015.508.586 12.549 12.549 0 017.423.414c.322-.005.61-.01.902-.012C8.685.4 9.04.4 9.402.4h0z" stroke="#A6A6A6" stroke-width=".8" fill="#000"></path><path d="M24.503 19.975a4.892 4.892 0 012.331-4.107 5.013 5.013 0 00-3.948-2.134c-1.662-.175-3.272.993-4.119.993-.862 0-2.166-.976-3.57-.947a5.251 5.251 0 00-4.424 2.698c-1.913 3.313-.486 8.18 1.347 10.858.917 1.311 1.988 2.776 3.39 2.724 1.373-.057 1.885-.875 3.541-.875 1.641 0 2.122.875 3.553.842 1.472-.024 2.4-1.317 3.285-2.64a10.893 10.893 0 001.502-3.06 4.733 4.733 0 01-2.888-4.351v-.001zM21.8 11.972a4.817 4.817 0 001.103-3.453 4.906 4.906 0 00-3.173 1.642 4.59 4.59 0 00-1.132 3.325 4.034 4.034 0 001.775-.389 4.036 4.036 0 001.427-1.125zm20.048 14.769h-4.683l-1.124 3.32h-1.984l4.435-12.284h2.061l4.435 12.285h-2.017l-1.123-3.32v-.001zM37.65 25.21h3.712l-1.83-5.389h-.051L37.65 25.21zm16.917.373c0 2.783-1.49 4.572-3.738 4.572a3.033 3.033 0 01-2.818-1.568h-.043v4.437H46.13v-11.92h1.78v1.49h.033a3.177 3.177 0 012.852-1.583c2.273 0 3.772 1.797 3.772 4.572zm-1.89 0c0-1.813-.937-3.005-2.367-3.005-1.404 0-2.35 1.217-2.35 3.005 0 1.805.946 3.013 2.35 3.013 1.43 0 2.367-1.183 2.367-3.013zm11.747 0c0 2.783-1.49 4.572-3.737 4.572a3.025 3.025 0 01-1.634-.38 3.013 3.013 0 01-1.184-1.188h-.043v4.437h-1.838v-11.92h1.78v1.49h.033a3.182 3.182 0 012.852-1.583c2.273 0 3.771 1.797 3.771 4.572zm-1.89 0c0-1.813-.936-3.005-2.366-3.005-1.405 0-2.35 1.217-2.35 3.005 0 1.805.945 3.013 2.35 3.013 1.43 0 2.367-1.183 2.367-3.013h-.001zm8.406 1.055c.136 1.218 1.32 2.018 2.936 2.018 1.55 0 2.665-.8 2.665-1.898 0-.954-.673-1.525-2.265-1.916l-1.592-.383c-2.255-.545-3.303-1.6-3.303-3.312 0-2.12 1.847-3.575 4.47-3.575 2.596 0 4.376 1.455 4.435 3.575h-1.855c-.111-1.226-1.125-1.966-2.606-1.966-1.48 0-2.494.749-2.494 1.838 0 .869.647 1.38 2.23 1.771l1.354.332c2.52.597 3.567 1.609 3.567 3.406 0 2.298-1.83 3.738-4.742 3.738-2.724 0-4.564-1.406-4.682-3.628h1.882zm11.51-7.653v2.12h1.703v1.455H82.45v4.938c0 .767.341 1.124 1.09 1.124.202-.003.404-.017.605-.042v1.447c-.337.063-.68.091-1.021.085-1.814 0-2.521-.681-2.521-2.418V22.56h-1.302v-1.456h1.302v-2.12h1.847v.001zm2.69 6.598c0-2.818 1.66-4.589 4.247-4.589 2.597 0 4.25 1.771 4.25 4.59 0 2.825-1.644 4.588-4.25 4.588-2.604 0-4.247-1.763-4.247-4.589zm6.623 0c0-1.933-.886-3.074-2.376-3.074-1.49 0-2.374 1.15-2.374 3.074 0 1.941.885 3.073 2.374 3.073 1.49 0 2.376-1.132 2.376-3.073zm3.389-4.479h1.753v1.525h.043a2.132 2.132 0 012.154-1.618 2.84 2.84 0 01.63.068v1.72a2.536 2.536 0 00-.826-.111 1.844 1.844 0 00-1.432.589 1.849 1.849 0 00-.483 1.471v5.313h-1.84v-8.957h.001zm13.056 6.326c-.247 1.626-1.83 2.742-3.856 2.742-2.606 0-4.223-1.746-4.223-4.546 0-2.81 1.626-4.632 4.145-4.632 2.478 0 4.037 1.703 4.037 4.418v.63h-6.326v.111a2.333 2.333 0 002.409 2.537 2.029 2.029 0 002.069-1.26h1.745zm-6.214-2.673h4.477a2.138 2.138 0 00-.602-1.616 2.145 2.145 0 00-1.595-.657 2.262 2.262 0 00-2.28 2.273zM37.42 8.53a2.603 2.603 0 012.082.809 2.604 2.604 0 01.695 2.124c0 1.886-1.02 2.97-2.778 2.97h-2.132V8.53h2.133zm-1.216 5.068h1.113a1.858 1.858 0 001.947-2.123 1.85 1.85 0 00-.069-.81 1.851 1.851 0 00-1.076-1.167 1.834 1.834 0 00-.802-.134h-1.113v4.234zm5.029-1.395a2.108 2.108 0 012.954-2.13 2.092 2.092 0 011.148 1.263c.093.28.127.575.099.867a2.12 2.12 0 01-1.246 2.135 2.116 2.116 0 01-2.418-.512 2.1 2.1 0 01-.537-1.623zm3.297 0c0-.965-.434-1.53-1.195-1.53-.764 0-1.194.565-1.194 1.53 0 .974.43 1.534 1.194 1.534.76 0 1.195-.564 1.195-1.534zm6.489 2.229h-.912l-.92-3.28h-.07l-.917 3.28h-.904l-1.227-4.454h.891l.798 3.4h.066l.916-3.4h.843l.916 3.4h.07l.794-3.4h.879l-1.223 4.454zm2.255-4.454h.847v.708h.065a1.34 1.34 0 011.33-.794 1.46 1.46 0 011.169.458 1.46 1.46 0 01.373 1.199v2.883h-.88V11.77c0-.716-.31-1.072-.96-1.072a1.028 1.028 0 00-.792.32 1.023 1.023 0 00-.225.374c-.047.14-.063.288-.047.435v2.606h-.88V9.978zm5.184-1.739h.88v6.193h-.88V8.239zm2.102 3.964a2.117 2.117 0 01.538-1.62 2.106 2.106 0 011.562-.691 2.107 2.107 0 012.101 2.311 2.1 2.1 0 01-.537 1.623 2.113 2.113 0 01-3.664-1.623zm3.297 0c0-.965-.434-1.53-1.195-1.53-.764 0-1.194.565-1.194 1.53 0 .974.43 1.534 1.194 1.534.76 0 1.195-.564 1.195-1.534zm1.83.97c0-.802.597-1.264 1.657-1.33l1.206-.07v-.384c0-.47-.31-.736-.912-.736-.49 0-.83.18-.928.495h-.851c.09-.765.81-1.256 1.82-1.256 1.117 0 1.746.556 1.746 1.497v3.043h-.846v-.626h-.07c-.14.225-.339.408-.574.53a1.489 1.489 0 01-.763.17 1.354 1.354 0 01-1.039-.337 1.353 1.353 0 01-.446-.996zm2.863-.381v-.373l-1.087.07c-.614.041-.892.25-.892.643 0 .4.348.634.826.634a1.047 1.047 0 00.783-.242 1.053 1.053 0 00.37-.732zm2.03-.589c0-1.407.725-2.299 1.85-2.299a1.472 1.472 0 011.366.782h.066V8.238h.879v6.193h-.843v-.703h-.07a1.544 1.544 0 01-1.398.777c-1.133 0-1.85-.892-1.85-2.303v.001zm.91 0c0 .945.444 1.514 1.19 1.514.74 0 1.198-.577 1.198-1.51 0-.928-.463-1.513-1.199-1.513-.74 0-1.19.572-1.19 1.51l.001-.001zm6.888 0a2.113 2.113 0 012.955-2.13 2.113 2.113 0 011.247 2.13 2.116 2.116 0 01-1.246 2.135 2.116 2.116 0 01-2.418-.512 2.118 2.118 0 01-.538-1.623zm3.297 0c0-.965-.433-1.53-1.195-1.53-.764 0-1.194.565-1.194 1.53 0 .974.43 1.534 1.194 1.534.761 0 1.195-.564 1.195-1.534zm2.084-2.225h.846v.708h.066A1.334 1.334 0 0186 9.892a1.456 1.456 0 011.169.458 1.449 1.449 0 01.374 1.199v2.883h-.88V11.77c0-.716-.311-1.072-.961-1.072a1.019 1.019 0 00-1.016.694c-.047.14-.063.288-.048.435v2.606h-.879V9.978zm8.751-1.109v1.13h.965v.74h-.965v2.29c0 .467.192.671.63.671.111 0 .223-.007.335-.02v.732a2.952 2.952 0 01-.478.045c-.978 0-1.368-.344-1.368-1.203V10.74h-.707V10h.707V8.87h.88l.001-.001zm2.165-.63h.872v2.455h.07a1.37 1.37 0 011.358-.798 1.468 1.468 0 011.534 1.66v2.876h-.88v-2.659c0-.711-.332-1.072-.953-1.072a1.055 1.055 0 00-.445.061 1.032 1.032 0 00-.676 1.069v2.601h-.88V8.239zm8.96 4.991a1.805 1.805 0 01-1.93 1.288 2.021 2.021 0 01-2.059-2.299 2.065 2.065 0 011.2-2.149c.269-.12.56-.18.855-.178 1.239 0 1.987.847 1.987 2.245v.307h-3.146v.05a1.184 1.184 0 00.709 1.18c.151.065.314.098.478.096a1.064 1.064 0 001.059-.54h.847zm-3.093-1.436h2.25a1.075 1.075 0 00-1.096-1.154 1.145 1.145 0 00-1.07.71 1.145 1.145 0 00-.084.444z" fill="#FFF"></path></g></svg>
//                         </a>
//                       </div>
//                       <div className="col-12@xs o-footer__app-store-container__icon-wrap u-dis-flex u-jus-cent@md-down u-font-size-0">
//                         <a href="#" target="blank">
//                           <svg width="135px" height="40px" preserveAspectRatio="xMinYMin meet" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="61.232%" y1="4.84%" x2="26.323%" y2="71.968%" id="prefix__a"><stop stop-color="#00A0FF" offset="0%"></stop><stop stop-color="#00A1FF" offset=".7%"></stop><stop stop-color="#00BEFF" offset="26%"></stop><stop stop-color="#00D2FF" offset="51.2%"></stop><stop stop-color="#00DFFF" offset="76%"></stop><stop stop-color="#00E3FF" offset="100%"></stop></linearGradient><linearGradient x1="107.724%" y1="49.424%" x2="-130.66%" y2="49.424%" id="prefix__b"><stop stop-color="#FFE000" offset="0%"></stop><stop stop-color="#FFBD00" offset="40.9%"></stop><stop stop-color="orange" offset="77.5%"></stop><stop stop-color="#FF9C00" offset="100%"></stop></linearGradient><linearGradient x1="86.389%" y1="30.829%" x2="-49.886%" y2="136.002%" id="prefix__c"><stop stop-color="#FF3A44" offset="0%"></stop><stop stop-color="#C31162" offset="100%"></stop></linearGradient><linearGradient x1="-18.581%" y1="-11.683%" x2="42.275%" y2="35.066%" id="prefix__d"><stop stop-color="#32A071" offset="0%"></stop><stop stop-color="#2DA771" offset="6.9%"></stop><stop stop-color="#15CF74" offset="47.6%"></stop><stop stop-color="#06E775" offset="80.1%"></stop><stop stop-color="#00F076" offset="100%"></stop></linearGradient></defs><g fill-rule="nonzero" fill="none"><path d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.7-2.2 5-5 5z" fill="#000"></path><path d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125zm0-.8H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z" fill="#A6A6A6"></path><path d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9v.3h0zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64V13h.1zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7 0z" stroke="#FFF" stroke-width=".2" fill="#FFF"></path><path d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z" fill="#FFF"></path><path d="M43.4 52.5c-.3.3-.5.8-.5 1.4V76c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L43.4 52.5z" fill="url(#prefix__a)" transform="translate(-33 -45)"></path><path d="M60 69.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#prefix__b)" transform="translate(-33 -45)"></path><path d="M60.1 69.2L55.9 65 43.4 77.5c.5.5 1.2.5 2.1.1l14.6-8.4z" fill="url(#prefix__c)" transform="translate(-33 -45)"></path><path d="M60.1 60.8l-14.6-8.3c-.9-.5-1.6-.4-2.1.1L55.9 65l4.2-4.2z" fill="url(#prefix__d)" transform="translate(-33 -45)"></path><path d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z" fill="#000" opacity=".2"></path><path d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z" fill="#000" opacity=".12"></path><path d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5C11.1 6.7 10 7.4 10 9v.1c0-1.6 1.1-2.3 2.5-1.5z" fill="#FFF" opacity=".25"></path></g></svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div><br />

//                   <div className="row u-mar-b-large@lg-up u-mar-t-medium">
//                     <div className="col-12@xs u-dis-flex@md-down u-space-around col-offset-3@md col-7@md col-12@lg">

//                       <div className="o-footer--social u-font-ta-c row">
//                         <div className="grid grid-cols-5 gap-x-10 gap-y-10">
//                           <div className="col-2@md">
//                             <a target="_blank" href="#" rel="noopener" >
//                               <span className="visually-hidden"></span>
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
//                                 <path fill="#383838" fill-rule="evenodd" d="M23.866 2.43a.499.499 0 0 0-.598-.102 4.84 4.84 0 0 1-.747.269c.39-.513.708-1.096.844-1.618a.5.5 0 0 0-.773-.534c-.294.209-1.653.811-2.53 1.006C18.949.45 17.84 0 16.5 0c-1.005 0-1.936.287-3.018.929-1.887 1.12-2.214 3.541-2.074 5.026-5.122-.488-7.995-3.468-9.016-4.765a.53.53 0 0 0-.428-.189.5.5 0 0 0-.397.247C.347 3.341.847 5.495 1.785 6.944a6.315 6.315 0 0 1-.466-.351.499.499 0 0 0-.82.385c0 2.197 1.288 3.767 2.544 4.659a9.232 9.232 0 0 1-.394-.115.501.501 0 0 0-.606.681c.803 1.805 2.4 3.151 4.19 3.619-1.54.937-3.667 1.418-5.675 1.181a.5.5 0 0 0-.306.931C2.686 19.324 5.215 20 7.982 20h.019c3.78-.003 7.332-1.648 9.998-4.632 2.573-2.879 3.922-6.566 3.646-9.923.66-.494 1.662-1.418 2.279-2.41a.499.499 0 0 0-.058-.605z"></path>
//                               </svg>
//                             </a>
//                           </div>
//                           <div className="col-2@md">
//                             <a target="_blank" href="#" rel="noopener" >
//                               <span className="visually-hidden"></span>
//                               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
//                                 <g fill="#383838" fill-rule="evenodd">
//                                   <path d="M5.978 2A3.983 3.983 0 0 0 2 5.978v10.044A3.983 3.983 0 0 0 5.978 20h10.044A3.983 3.983 0 0 0 20 16.022V5.978A3.983 3.983 0 0 0 16.022 2H5.978zm10.044 20H5.978A5.985 5.985 0 0 1 0 16.022V5.978A5.985 5.985 0 0 1 5.978 0h10.044A5.985 5.985 0 0 1 22 5.978v10.044A5.985 5.985 0 0 1 16.022 22z"></path>
//                                   <path d="M11 7c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m0 10c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6M17 5c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1"></path>
//                                 </g>
//                               </svg>

//                             </a>
//                           </div>
//                           <div className="col-2@md">
//                             <a target="_blank" href="#" rel="noopener" >
//                               <span className="visually-hidden"></span>
//                               <div style={{ margin: "5px" }}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
//                                   <path fill="#383838" fill-rule="evenodd" d="M16.771 9.42l-7 4.5A.498.498 0 0 1 9 13.5v-9a.501.501 0 0 1 .771-.42l7 4.5a.5.5 0 0 1 0 .84M20.935.675L19.036.437a56.917 56.917 0 0 0-14.071 0L3.066.674A3.506 3.506 0 0 0 0 4.148v9.704a3.505 3.505 0 0 0 3.066 3.473l1.899.238C7.291 17.852 9.658 18 12 18c2.343 0 4.71-.149 7.036-.439l1.899-.238A3.505 3.505 0 0 0 24 13.852V4.148A3.506 3.506 0 0 0 20.935.674"></path>
//                                 </svg>
//                               </div>
//                             </a>
//                           </div>
//                           <div className="col-2@md">
//                             <a target="_blank" href="#" rel="noopener" >
//                               <span className="visually-hidden"></span>
//                               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
//                                 <path fill="#383838" fill-rule="evenodd" d="M20 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h7.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-.979a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H9.5a.5.5 0 0 0 .5-.5v-1C10 6.019 12.019 4 14.5 4h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.497.497 0 0 1 .493.583l-.5 3A.498.498 0 0 1 17 14h-2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H20c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2"></path>
//                               </svg>
//                             </a>
//                           </div>
//                           <div className="col-2@md">
//                             <a target="_blank" href="#" rel="noopener" >
//                               <span className="visually-hidden"></span>
//                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24">
//                                 <path fill="#383838" fill-rule="evenodd" d="M10.527 0C2.756 0 0 4.581 0 8.504c0 2.994 2.346 5.723 3.605 6.347a.5.5 0 0 0 .7-.304l.828-2.746a.5.5 0 0 0-.117-.491C4.738 11.02 4 10.249 4 8.993c0-3.438 2.408-5.492 6.442-5.492C13.558 3.501 16 5.694 16 8.493c0 2.576-2.072 5.513-3.889 5.513-2.114 0-2.139-1.919-2.141-1.991 1.189-1.127 1.585-3.51 1.585-4.047.001-.317.003-.906-.474-1.359-.424-.402-1.143-.606-2.137-.606-2.478 0-3.139 1.886-3.139 3.001 0 .841.507 1.962.53 1.992L3.874 21.162c-.028.146-.241 1.46.739 2.655a.5.5 0 0 0 .664.099c.474-.316 1.326-.964 1.71-1.755.445-.921 1.708-4.189 2.421-6.055l.09-.092c.011.009 1.237.994 3.14.994 5.434 0 7.362-4.582 7.362-8.504C20 5.345 18.005 0 10.527 0"></path>
//                               </svg>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div><br />
//                   <div className="row">
//                     <div className="col-12@xs u-mar-v-medium@md-down">
//                       <span style={{}}><p className="u-font--smaller u-font-ta-c@md-down" data-copyright="">
//                         © Copyright 2023 - Matalan
//                         Perimeter Road,
//                         Knowsley Industrial Park,
//                         Knowsley, Liverpool L33 7SZ, UK

//                       </p></span>
//                     </div>
//                   </div><br />
//                   <div className="row u-mar-t-huge@lg-up u-mar-t-large@lg-down">
//                     <div className="col-12@xs u-font-lh-0 u-font-ta-c@md-down">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="166" height="80" viewBox="0 0 166 80">
//                         <g fill="none" fill-rule="evenodd">
//                           <path fill="#AD1E1F" d="M0 80h166V0H0z"></path>
//                           <g fill="#FEFEFE">
//                             <path d="M130.003 47.015l-2.508 3.434-2.517-3.434h-.746l2.927 4.036v2.214h.673v-2.22l2.918-4.03zM122.692 50.083c0 1.515-1.082 2.533-2.693 2.533h-1.887V47.65H120c1.61 0 2.693.977 2.693 2.432M120.08 47h-2.637v6.267h2.637c1.913 0 3.302-1.336 3.302-3.178 0-1.79-1.389-3.089-3.302-3.089M113.463 50.677h-2.745l1.373-2.73 1.372 2.73zm-.968-3.664h-.654l-3.163 6.254.795-.002 1.009-1.975h3.372l1.009 1.975.795.002-3.163-6.254zM107.28 47.626v-.613h-4.756v6.253h4.756v-.613h-4.084v-2.207h3.628v-.613h-3.628v-2.207zM99.303 49.007c0 .815-.689 1.362-1.713 1.362h-2.068v-2.715h2.068c1.024 0 1.713.544 1.713 1.353zm-.92 1.922l.008-.002c1.007-.237 1.609-.955 1.609-1.92 0-1.217-.94-2.003-2.392-2.003H94.85v6.262h.672v-2.247h2.05l2.006 2.247h.889l-2.084-2.337zM87.653 47.626v-.613h-4.755v6.253h4.755v-.613H83.57v-2.207h3.627v-.613H83.57v-2.207zM76.25 47.013v6.253h.671v-2.688h3.703v-.612h-3.703v-2.34h4.084v-.613zM72.731 53.266h.672v-6.253h-.672zM66.25 47.013v6.253h4.475v-.613H66.92v-5.64zM55.569 47.013v6.253h4.475v-.613h-3.803v-5.64zM49.914 47.013l-3.163 6.254.795-.001 1.008-1.976h3.373l1.008 1.976h.795l-3.163-6.253h-.653zm.326.934l1.373 2.73h-2.745l1.372-2.73zM40.597 47.013v6.253h4.755v-.613H41.27v-2.207h3.627v-.613h-3.627v-2.207h4.083v-.613zM37.453 49.007c0 .815-.689 1.362-1.714 1.362h-2.067v-2.715h2.067c1.025 0 1.714.544 1.714 1.353zm-.92 1.922l.008-.002c1.007-.237 1.608-.955 1.608-1.92 0-1.217-.938-2.003-2.391-2.003H33v6.262h.672v-2.247h2.05l2.006 2.247h.889l-2.084-2.337z"></path>
//                           </g>
//                           <g fill="#FEFEFE">
//                             <path d="M143.818 18.003v15.17L130.308 18l-2.031.003v17.763h1.785V20.594l13.449 15.113.049.056 2.043.003V18.003zM120.499 28.491h-8.083l4.041-8.042 4.042 8.042zm-3.103-10.4l-.046-.09h-1.786l-8.986 17.766 2.122-.004 2.887-5.655h9.74l2.887 5.655 2.123.004-8.941-17.676zM93.746 34.15V18.003h-1.785v17.763h12.676V34.15zM84.182 28.491H76.1l4.042-8.042 4.041 8.042zm-3.102-10.4l-.046-.09h-1.786L70.26 35.766l2.123-.004 2.887-5.655h9.74l2.887 5.655 2.122.004-8.94-17.676zM59.296 18.003v1.615h6.265v16.148h1.786V19.618h6.265v-1.615zM56.816 28.491h-8.083l4.041-8.042 4.042 8.042zm-3.06-10.314L53.668 18h-1.786l-8.986 17.767 2.122-.004 2.887-5.655h9.74l2.887 5.655 2.123.004-8.897-17.59zM38.558 18.003h-2.206l-6.875 15.09-6.874-15.09h-2.206L18 35.766h1.896l1.998-14.872 6.745 14.874.838-.001h.838l6.745-14.873 1.998 14.872h1.896z"></path>
//                           </g>
//                           <path fill="#FFF" fill-rule="nonzero" d="M161.001 70l-5-.008a.75.75 0 0 0-.002 1.5l5 .008A.75.75 0 0 0 161 70zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.007a.75.75 0 0 0-.002 1.5l5 .007a.75.75 0 0 0 .002-1.5zm-10-.015l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.015l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.007a.75.75 0 0 0-.002 1.5l5 .007a.75.75 0 0 0 .002-1.5zm-10-.015l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5zm-10-.016l-5-.008a.75.75 0 0 0-.002 1.5l5 .008a.75.75 0 0 0 .002-1.5z"></path>
//                         </g>
//                       </svg>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//     </section>
//     </footer>
//   );
// };

// export default Footer;
import * as React from "react";
// import logo from "../../images/mgmlogo.jpg";
// import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";
import pizzaLogo from "../../images/mgmlogo.jpg"

var currentTime = new Date()
var year = currentTime.getFullYear()

type Link = {
   label: string;
   url: string;
};

const links: Link[] = [
   {
      label: "Privacy Policy",
      url: "/",
   },
   {
      label: "Copyright/Legal Info",
      url: "/copyright"
   },
];



const Footer = (props: any) => {
   const Aboutm = props?._site?.c_aboutMgm?.headingLink?.map((link: any) => (
      <a  className="navbar-item" href="#" >
        <span>{link.label}</span><br />
      </a>
    ));
    const customerService = props?._site?.c_customer_Services?.headingLink?.map((link: any) => (
      <a  className="navbar-item" href="#" >
        <span>{link.label}</span><br />
      </a>
    ));



   return (
      <>
         <footer
           
            >
            <div style={{background: "#1e293e", color: "white"}} className="footer">
               {/* <div className="footerLogo">
                  <a className="logo" href="/">
                     <img className="" src={logo} alt="Prezzo" />
                  </a>
               </div> */}
               <div className="footer_links">
                  <div  className="column pb-4">
                  {
                  props?._site?.c_mgmTimberLogo?
                  <img src={props._site.c_mgmTimberLogo.url} alt="logo"/>:
                  <div/>
                
                } 
                     {/* <a href="/" target="_self"  rel="noreferrer">
                        <img  style={{height:"75px",marginLeft:"50px"}}src={pizzaLogo} alt="Logo" className="fadein imgFinal" />
                     </a><br/> */}
                     <div className="social-media">
                     <div className="contact-links ml-12 mt-12">
                        {/* <ul>
                           <li><img src="https://www.mgmtimber.co.uk/static/version1674641584/frontend/mgmtimber/default/en_GB/images/icons/contact.svg" alt=""/><a href="#">Contact Us</a></li>

                           <li><img src="https://www.mgmtimber.co.uk/static/version1674641584/frontend/mgmtimber/default/en_GB/images/icons/get-quote.svg" alt=""/> <a href="#">Get a Quote</a></li>
                           
                           <li><img src="https://www.mgmtimber.co.uk/static/version1674641584/frontend/mgmtimber/default/en_GB/images/icons/find-a-branch.svg" alt=""/> <a title="Branch Locator" href="#">Find a Branch</a></li>
                        </ul> */}
                     </div>  
                     <div className="jds-group ml-12 mt-10">
                        <img loading="lazy" src="https://www.mgmtimber.co.uk/static/version1674641584/frontend/mgmtimber/default/en_GB/images/jd-group.png" alt="Part of the JDS Group" width="374" height="21"/>
                     </div> 
                        {/* <a href="#" target="_blank" title="Facebook" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Instagram" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" target="_blank" title="Twitter" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a> */}
                     </div>
                  </div>
                  <div className="column">
                     <h5>{props._site?.c_customer_Services.headerLinkHeading}</h5>
                     <ul>
                        <li><a href="#" title="Careers">{customerService}</a></li>
                        {/* <li><a href="#" title="Community Commitments">Find a Branch</a></li>
                        <li><a href="#" title="Health Hub">Get a Quote</a></li>
                        <li><a href="#" title="Offers">Delivery Information</a></li>
                        <li><a href="#" title="Competitions">Click & Collect</a></li>
                        <li><a href="#" title="Competitions">Returns & Refunds</a></li>
                        <li><a href="#" title="Competitions">FAQs</a></li> */}
                     </ul>
                  </div>
                  <div className="column">
                     <h5>{props._site.c_aboutMgm.headerLinkHeading}</h5>
                     <ul>
                        <li><a href="#" title="Main Menu">{Aboutm}</a></li>
                        {/* <li><a href="#" title="Kid's Menu">Credit Account</a></li>
                        <li><a href="#" title="Drinks Menu">Environmental</a></li>
                        <li><a href="#" title="Drinks Menu">Modern Slavery Statement</a></li>
                        <li><a href="#" title="">{Aboutm}</a></li> */}
                     </ul>
                  </div>
                  <div className="footer-newsletter">
                     <form className="form subscribe"  action="https://mgmtimber.us15.list-manage.com/subscribe/post?u=385bafbd480f5865266cc45d9&amp;id=afed42f339" method="post" id="mc-embedded-subscribe-form" target="_blank" name="mc-embedded-subscribe-form">
                        <div className="footer-newsleter-wrapper">
                           <div className="newsletter-caption">
                              <div className="newsletter-icon">
                                 <i className="icon-email"></i>
                              </div>
                              <div className="newsletter-icon">
                                 <i className="icon-email"></i>
                              </div>
                              <div className="newsletter-message">
                                 <h5>Newsletter Subscription</h5>
                                 <p style={{ color: "rgba(0,0,0,.87)" }}>Get all the latest information on Events, Sales and Offers.<br /> Sign up for our newsletter today.</p>
                              </div>
                           </div>
                           <div className="newsletter-form" style={{ marginRight:"10px" }}>
                              <input className="rounded" name="EMAIL" type="email" id="newsletter" placeholder="Enter your email address" />
                              <button style={{ background: "#0078b8" }} className="btn" title="Subscribe" type="submit" aria-label="Subscribe">
                                 <span>SUBSCRIBE</span>
                              </button>
                           </div>
                        </div>
                     </form>
                     <div className="otherLinks" >
                        
                       <div>
                        <ul  className="socialmedia" >
                        {props._site.c_socialIcons.map((res: any) => {
                          return (
                            <>
                              <a href="#" >
                                <img style={{width:"30px",height:"30px"}} src={res.icon.url} />
                              </a>
                            </>
                          )
                        })}
                        {/* <li className="facebook"><img src="https://piunikaweb.com/wp-content/uploads/2021/11/facebook-featured.jpg"></img><a href="https://www.facebook.com/mgmtimber" target="_blank" rel="noopener" style={{backgroundColor:"yellow"}}>&nbsp;</a></li> */}
                      
                        {/* <li className="facebook"><a href="https://www.facebook.com/mgmtimber" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg></a></li>
                       


                           <li className="twitter"><a className="twitter" title="Twitter" href="https://twitter.com/mgmtimber" target="_blank" rel="noopener" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg></a></li>
                           
                           <li className="linkedin"><a className="linkedin" title="Linkedin" href="https://www.linkedin.com/company/mgm-timber-scotland-ltd/" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg> </a></li>


                           <li className="youtube"><a className="youtube" title="youtube" href="https://www.youtube.com/channel/UCaL-CN3rxqnQM2Yp1cFLWLA" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg> </a></li>


                           <li className="instagram"><a className="instagram" title="instagram" href="https://www.instagram.com/mgmtimber/" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg> </a></li>

                           <li className="pinterest"><a className="pinterest" title="pinterest" href="https://www.pinterest.co.uk/MGMTimber/" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/> </svg>  </a></li> */}
                        </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>




         </footer>
      </>
   );
};

export default Footer;

