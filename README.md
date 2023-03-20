[![Test CI](https://github.com/phuongpt/react-hybrid-clean-architecture/actions/workflows/test.yml/badge.svg)](https://github.com/phuongpt/react-hybrid-clean-architecture/actions/workflows/test.yml)

![high-level-diagram](https://github.com/phuongpt/react-hybrid-clean-architecture/blob/develop/docs/images/high-level-diagram.jpg)  

# React Clean Architecture
One of the advantages that particularly stands out to me is the ability to isolate business rules from framework-specific details. This means that your core logic is not tied to any specific technology, such as React, React Native. As a result, you have greater flexibility to move certain parts of your application to a backend, switch out libraries with minimal hassle, and reuse tests as many times as you need. Additionally, you can even share code between React and React Native applications.

## Screenshot
Web app                    |  Native app
:-------------------------:|:-------------------------:
![](https://github.com/phuongpt/react-hybrid-clean-architecture/blob/develop/docs/images/web.gif)  |  ![](https://github.com/phuongpt/react-hybrid-clean-architecture/blob/develop/docs/images/native.gif)

## Folder Structure
```
./frontend
├── core
│   └── package.json
│   └── lib
│       ├── adapters
│       ├── entities
│       ├── services
│       ├── useCases
│       └── features
├── native
│   └── package.json
│   └── src
│       ├── assets
│       ├── components
│           └── login
│                   └── index
│                   └── styles
│           └── register
│                   └── index
│                   └── styles
└── web
    └── package.json
    └── src
        ├── assets
        ├── components
            └── login
                    └── index
                    └── styles
            └── register
                    └── index
                    └── styles

```

## Sharing codes
|               | Web App        | Native App    |
|  :---:        |     :---:      |    :---:      |
| Entities      | &#9745;        | &#9745;       |
| Validation    | &#9745;        | &#9745;       |
| User-cases    | &#9745;        | &#9745;       |
| Repository    | &#9745;        | &#9745;       |
| Service       | &#9745;        | &#9745;       |
| State         | &#9745;        | &#9745;       |
| Actions       | &#9745;        | &#9745;       |
| React-Hook    | &#9744;        | &#9744;       |
| Navigation    | &#9744;        | &#9744;       |
| Component     | &#9744;        | &#9744;       |
| Style         | &#9744;        | &#9744;       |


## Running the apps
run `yarn install` under the project you'd like to run, and then run `yarn start`
 
