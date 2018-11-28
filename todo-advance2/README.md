# Scaffolding
- assets
  - css
  - js
- dist (임시 dist)
- app
  - publish path, index.html
  - business
- tools
  - build-configs
    - app-config
    - server
    - webpack


```
{
  "src": {
    "components/": {
      "component/": {
        "index.tsx": "dumb component",
        "index.test.js": "테스트 코드",
        "index.story.js": "StoryBook 코드"
      }
    },
    "containers/": {
      "container/": {
        "ducks.ts": "constants, api, reducer, actionCreator, types",
        "index.tsx": "component, container를 포함하는 smart component",
        "index.test.js": "테스트 코드",
        "index.story.js": "StoryBook 코드",
        "sagas.ts": "saga 그룹",
        "selectors.ts": "selector"
      }
    },
    "elements/": {
      "element/": {
        "index.tsx": "stateless component",
        "index.test.js": "테스트 코드",
        "index.story.js": "StoryBook 코드"
      }
    },
    "hocs/": {
      "hoc.ts": "hoc"
    },
    "utils": {
      "util.ts": "util"
    },
    "ducks.ts": "common ducks",
    "index.tsx": "entry point",
    "sagas.ts": "common sagas",
    "selectors.ts": "common selectors"
  }
}
```
