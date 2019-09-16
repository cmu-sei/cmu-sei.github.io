# cmu-sei.github.io

Source for the sei-cmu.github.io website. We welcome contributions from SEI teams to help centralize and share our work with the open source community.

## About

### How to contribute

Before starting work on a new feature, enhancement, or fix, please create an issue and optionally assign it to yourself or a developer.

1. Fork this repository and make changes against the 'development' branch (not master).
2. After making changes in your fork, perform testing to ensure the page looks good and works with all supported browsers.
3. If you have made a series of commits into the 'development' branch, please squash them into a small number of commits.
4. Issue a Pull Request against the 'development' branch (not master).
5. The admins for this site will review your code and may optionally request changes. Work with them to resolve any issues.
6. Upon acceptance, your code will be merged into the master branch and will become available for all.

### List of SEI Organizations on GitHub

- <https://github.com/cps-sei>
- <https://github.com/SEI-TTG>
- <https://github.com/CERTCC>
- <https://github.com/osate>

Note. If the SEI Open Source project you are looking for is not in one of these organizations
then we have several other projects hosted on SourceForge and BitBucket here:

- <https://www.cert.org/engage/tools.cfm>
- <http://tools.netsa.cert.org/>
- <http://certjiraplugins.sourceforge.net/>
- <https://bitbucket.org/spacer/spacer.bitbucket.org>
- <http://sourceforge.net/projects/madara>
- <https://www.cs.cmu.edu/~wklieber/didfail/>

## Development

### Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your unit tests

```bash
npm run test:unit
```

### Add a repo

- Ensure to follow the contribution instructions found above.
- Navigate to `src/data/repos.js`.
- Add repo by following format specified in file.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
