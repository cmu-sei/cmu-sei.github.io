// This is a configuration file to control the repositories that show up in the carousel and those that are listed on the page.
//
// Syntax:
// {
//    /**
//      * Name of repository or organization. You can specify a single repository to include on the page by including the full name
//      * to the repository like "CPS-sei/mzsrm" or you could include the name of the organization such as "CPS-sei" and all
//      * repositories under that account will be displayed on the page. Depending on what you choose here, you need to use the
//      * appropriate type value of either "org" or "repo".
//      * @type String
//      */
//    name: null,
//    /**
//      * Specifies if you want to display a single repository or all repositories under an organization. Valid options are "repo"
//      * or "org".
//      * @type String
//      */
//    type: null
// }
//
// Example:
//
// Single repository
//
// {
//   name: "osate/ErrorModelV2",
//   type: "repo"
// }
//
// All repositories under the osate organization account.
//
// {
//   name: "osate",
//   type: "org"
// }
//

export default [
  {
    name: 'CERTCC/certfuzz',
    type: 'repo'
  },
  {
    name: 'CERTCC/dranzer',
    type: 'repo'
  },
  {
    name: 'seahorn/seahorn',
    type: 'repo'
  },
  {
    name: 'cps-sei/dart',
    type: 'repo'
  },
  {
    name: 'cps-sei/dmplc',
    type: 'repo'
  },
  {
    name: 'cps-sei/mzsrm',
    type: 'repo'
  },
  {
    name: 'cps-sei/mcda',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/pycloud',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/cloudlet-client',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/client-lib-android',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/client-lib',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/android-logger',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/speech-server',
    type: 'repo'
  },
  {
    name: 'SEI-TTG/speech-android',
    type: 'repo'
  },
  {
    name: 'CERTCC/ip6tables-configuration',
    type: 'repo'
  },
  {
    name: 'osate/osate2-core',
    type: 'repo'
  },
  {
    name: 'osate/examples',
    type: 'repo'
  },
  {
    name: 'osate/ErrorModelV2',
    type: 'repo'
  },
  {
    name: 'osate/osate2-plugins',
    type: 'repo'
  },
  {
    name: 'osate/development',
    type: 'repo'
  },
  {
    name: 'osate/osate-ge',
    type: 'repo'
  },
  {
    name: 'osate/osate2-ba',
    type: 'repo'
  },
  {
    name: 'SEI-CERT/scvs',
    type: 'repo'
  },
  {
    name: 'jredmondson/gams',
    type: 'repo'
  },
  {
    name: 'CERTCC/Vulnerability-Data-Archive',
    type: 'repo'
  },
  {
    name: 'CERTCC/Vulnerability-Data-Archive-Tools',
    type: 'repo'
  },
  {
    name: 'cmu-sei',
    type: 'org'
  }
]
