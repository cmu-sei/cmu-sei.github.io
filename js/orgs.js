// This is a configuration file to control the repositories that show up in the carousel and those that are listed on the page.
//
// Syntax:
// {
//    /**
//      * Name of repository or organization. You can specify a single repository to include on the page by including the full name
//      * to the repository like "CPS-sei/mzsrm" or you could include the name of the organization such as "CPS-sei" and all
//      * repositories under that account will be displayed on the page. Depending on what you choose here, you need to use the
//      * appropriate "type" value of either "org" or "repo".
//      * @type String
//      */
//    "name": null,
//    /**
//      * Specifies if you want to display a single repository or all repositories under an organization. Valid options are "repo"
//      * or "org".
//      * @type String
//      */
//    "clicked": null,
//    /**
//      * Determines if the project will be featured in the carousel at the top of the page.
//      * @featured Boolean
//      */
//    "featured": null
// }
//
// Example:
//
// Single repository that is featured in carousel
//
// { "name": "osate/ErrorModelV2",
//   "type": "repo",
//   "featured": true
// }
//
// All repositopries under the osate organization account and none of them are featured in the carousel.
//
// { "name": "osate",
//   "type": "org",
//   "featured": false
// }
//


var orgs = [
     {"name": "CERTCC-Vulnerability-Analysis/certfuzz",
     "type": "repo",
     "featured": true},
     {"name": "CERTCC-Vulnerability-Analysis/dranzer",
     "type": "repo",
     "featured": false},
     {"name": "quilt/quilt",
     "type": "repo",
     "featured": true},
     {"name": "cmu-sei/pdfrankenstein",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/nabu",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/pharos",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/big-grep",
     "type": "repo",
     "featured": false},
     {"name": "seahorn/seahorn",
     "type": "repo",
     "featured": true},
     {"name": "cps-sei/dart",
     "type": "repo",
     "featured": false},
     {"name": "cps-sei/dmplc",
     "type": "repo",
     "featured": false},
     {"name": "cps-sei/mzsrm",
     "type": "repo",
     "featured": false},
     {"name": "cps-sei/mcda",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/pycloud",
     "type": "repo",
     "featured": true},
     {"name": "SEI-AMS/cloudlet-client",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/client-lib-android",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/client-lib",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/android-logger",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/speech-server",
     "type": "repo",
     "featured": false},
     {"name": "SEI-AMS/speech-android",
     "type": "repo",
     "featured": false},
     {"name": "CERTCC-Vulnerability-Analysis/ip6tables-configuration",
     "type": "repo",
     "featured": false},
     {"name": "osate/osate2-core",
     "type": "repo",
     "featured": true},
     {"name": "osate/examples",
     "type": "repo",
     "featured": false},
     {"name": "osate/ErrorModelV2",
     "type": "repo",
     "featured": false},
     {"name": "osate/osate2-plugins",
     "type": "repo",
     "featured": false},
     {"name": "osate/development",
     "type": "repo",
     "featured": false},
     {"name": "osate/osate-ge",
     "type": "repo",
     "featured": false},
     {"name": "osate/osate2-ba",
     "type": "repo",
     "featured": false},
     {"name": "osate/osate2-all",
     "type": "repo",
     "featured": false},
     {"name": "SEI-CERT/scvs",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/eraces",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/bgpuma",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/quabasebd",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/gbtl",
     "type": "repo",
     "featured": false},
     {"name": "jredmondson/gams",
     "type": "repo",
     "featured": false},
     {"name": "CERTCC-Vulnerability-Analysis/Vulnerability-Data-Archive",
     "type": "repo",
     "featured": false},
     {"name": "CERTCC-Vulnerability-Analysis/Vulnerability-Data-Archive-Tools",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/AASPE",
     "type": "repo",
     "featured": false},
     {"name": "cmu-sei/eem",
     "type": "repo",
     "featured": false}
];
