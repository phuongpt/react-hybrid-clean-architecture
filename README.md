
![high-level-diagram](https://github.com/phuongpt/react-hybrid-clean-architecture/blob/develop/docs/images/high-level-diagram.jpg)  

# React Clean Architecture
When it comes to React codebases, implementing clean architecture can have many benefits. You can easily find these benefits by searching for what clean architecture is and what architectural patterns you should adopt.

One of the advantages that particularly stands out to me is the ability to isolate business rules from framework-specific details. This means that your core logic is not tied to any specific technology, such as React, React Native, or Express. As a result, you have greater flexibility to move certain parts of your application to a backend, switch out libraries with minimal hassle, and reuse tests as many times as you need. Additionally, you can even share code between React and React Native applications.

What I appreciate about this approach is that it's both simple enough to implement and robust enough to be used in a production environment. While I've simplified things for educational purposes, I believe that this example provides great value for those looking to start applying architectural patterns and adapting them to their own unique needs.    


## Folder Structure
```
./frontend
├── core
│   └── package.json
│   └── lib
│       ├── adapters
│       │   └── redux
│       ├── entities
│       ├── frameworks
│       └── useCases
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

## Running the apps
run `yarn install` under the project you'd like to run, and then run `yarn start`
 
