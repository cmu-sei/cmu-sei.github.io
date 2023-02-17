interface RepoItem {
  owner: string
  ownerUrl: string
  name: string
  url: string
  description: string
  stars: number
  forks: number
  lastModified: date
  language: {
    title: string
    color: string
  }
}

interface ResponseItem {
  ownerUrl: string
  name: string
  url: string
  description: string
  stars: number
  forks: number
  lastModified: date
  language: string
  updated_at?: any
  owner: {
    login: string
    html_url: string
  }
  html_url: string
  stargazers_count: number
  forks_count: number
}

interface GithubColors {
  [key: string]: {
    color: string
    url: string
  }
}